"""

DISCLAIMER: This model is extremely simple and uses a small dataset from the web for training, so the generated responses may be inaccurate. This model is for PROOF OF CONCEPT ONLY, please do not rely on it
as a geniune mental health help tool.

ORIGINAL DATASET: https://www.kaggle.com/datasets/elvis23/mental-health-conversational-data?resource=download


"""

import pandas as pd
import json 
from random import randint
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC


def train_intent_model(intents_file):
    with open(intents_file, 'r') as f:
        data = json.load(f)

    df = pd.DataFrame(data['intents'])
    df = df.explode('patterns').reset_index(drop=True)

    responses_dict = {}
    for tag in df['tag'].unique():
        responses = df[df['tag'] == tag]['responses'].iloc[0]
        responses_dict[tag] = responses

    X = df['patterns']
    y = df['tag']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    vectorizer = TfidfVectorizer()
    X_train_vec = vectorizer.fit_transform(X_train)
    X_test_vec = vectorizer.transform(X_test)

    model = SVC()
    model.fit(X_train_vec, y_train)

    return model, vectorizer, responses_dict

def predict_intent(model, vectorizer, responses_dict, user_input):
    user_input_vec = vectorizer.transform([user_input])
    intent = model.predict(user_input_vec)[0]
    return intent

def generate_response(responses_dict, intent):
    key = responses_dict[intent]
    response = key[randint(0, len(key) - 1)]
    return response

if __name__ == "__main__":
    intents_file = 'ai\intents.json'
    model, vectorizer, responses_dict = train_intent_model(intents_file)
