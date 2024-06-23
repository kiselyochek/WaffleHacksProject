from flask import Flask, request, jsonify, render_template, redirect, url_for, flash, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import os

db_folder = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'databases')
db_path = os.path.join(db_folder, 'app.db')

if not os.path.exists(db_folder):
    os.makedirs(db_folder)

app = Flask(__name__, static_folder='dist', static_url_path='', instance_relative_config=True)
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.String(150), nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

with app.app_context():
    db.create_all()

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.json

        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()

        if not user or not user.check_password(password):
            return jsonify({'error': 'Invalid username or password'}), 401

        return jsonify({'message': 'Login successful'}), 200
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/register', methods=['POST'])
def register():
    data = request.json

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    confirmPassword = data.get('confirmPassword')

    if password != confirmPassword:
        return jsonify({'error': 'Passwords do not match'}), 400


    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({'error': 'Username already exists'}), 400

    existing_email = User.query.filter_by(email=email).first()
    if existing_email:
        return jsonify({'error': 'Email already exists'}), 400
    
    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)