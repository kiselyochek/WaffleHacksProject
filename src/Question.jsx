const Question = (props) => {
  
    const { question, option1, option2, option3, option4 } = props;
  
    return (
      <div className="QuizContainer">
        <div className="quizHeader">
          <h2>Question</h2>
          <p className="PracticeDescription">
            Read the question and choose the most appropriate option.
          </p>
        </div>
        <hr/>
  
        <div className="PracticeQuestionContainer">
          <p>{props.question}</p>
  
          <div className="option-container">
            <input type="radio" name="select" id="option-1" className="input-radio" />
            <input type="radio" name="select" id="option-2" className="input-radio" />
            <input type="radio" name="select" id="option-3" className="input-radio" />
            <input type="radio" name="select" id="option-4" className="input-radio" />
  
            <label htmlFor="option-1" className="option option-1">
              <div className="dot"></div>
              <span>{props.option1}</span>
            </label>
  
            <label htmlFor="option-2" className="option option-2">
              <div className="dot"></div>
              <span>{props.option2}</span>
            </label>
  
            <label htmlFor="option-3" className="option option-3">
              <div className="dot"></div>
              <span>{props.option3}</span>
            </label>
  
            <label htmlFor="option-4" className="option option-4">
              <div className="dot"></div>
              <span>{props.option4}</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
  
  export default Question;