import Question from './Question';
import { useNavigate } from 'react-router-dom';

const Survey = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dashboard');
    }

    return (
        <div className="survey">
            <ul>
                <li>
                <Question 
            question="1. What gender do you identify as?"
            option1="Male"
            option2="Female"
            option3="Non-binary"
            option4="Prefer not to answer"/>
                </li>

                <li><Question
            question="2. What is your age group?"
            option1="Under 18"
            option2="18-24"
            option3="25-34"
            option4="35+"/>
                </li>

                <li><Question
            question="3. How much do you sleep on average per night?"
            option1="Less than 6 hours"
            option2="6-8 hours"
            option3="more than 8 hours"
            option4="I have an irregular sleep schedule"/>
                </li>

                <li> <Question
            question="4. How much sleep would you like to get per night?"
            option1="I'm happy with my current sleep schedule"
            option2="I need more little sleep"
            option3="I need a lot more sleep"
            option4="I want to work on the irregularity"/>
                </li>

                <li><Question
            question="5. How often do you exercise?"
            option1="I don't exercise"
            option2="1-2 times a week"
            option3="3-4 times a week"
            option4="5+ times a week"/>
                </li>

                <li><Question
            question="6. On a scale of 1 to 5, how satisfied are you with your social life?"
            option1="1"
            option2="2"
            option3="3"
            option4="4"
            option5="5"/>
                </li>

                <li><Question
            question="7. On a scale of 1 to 5, how satisfied are you with your professional life?"
            option1="1"
            option2="2"
            option3="3"
            option4="4"
            option5="5"/>
                </li>

                <li><Question
            question="8. How often do you feel stressed during a typical week?"
            option1="Rarely or never"
            option2="Occasionally"
            option3="Often"
            option4="Constantly"/>
                </li>

                <li><Question
            question="9. How often do you engage in relaxation techniques (e.g., meditation, deep breathing)?"
            option1="Rarely or never"
            option2="Occasionally"
            option3="Often"
            option4="Constantly"/>
                </li>

                <li><Question
            question="10. How often do you engage in activities that promote mental well-being (e.g., hobbies, socializing)?"
            option1="Rarely or never"
            option2="Occasionally"
            option3="Often"
            option4="Constantly"/>
                </li>

                <li className="survey-submit"><button onClick={handleClick}>Submit</button></li>
            </ul>

            
        </div>
    );
    }

export default Survey;