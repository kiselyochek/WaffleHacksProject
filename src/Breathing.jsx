import { useState, useEffect } from 'react';

function breatheForFiveMinutes(setTimeLeft, setBreathingInstruction) {
    let totalSeconds = 300;

    const breatheInOut = () => {
        setBreathingInstruction('Breathe In');
        setTimeout(() => {
            setBreathingInstruction('Breathe Out');
        }, 4000); 
    };

    breatheInOut();
    const interval = setInterval(() => {
        totalSeconds -= 1;
        setTimeLeft(totalSeconds);

        if (totalSeconds % 8 === 0) {
            breatheInOut();
        }

        if (totalSeconds <= 0) {
            clearInterval(interval);
            setBreathingInstruction('Well done!');
        }
    }, 1000);
}

const Breathing = () => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [breathingInstruction, setBreathingInstruction] = useState('');

    useEffect(() => {
        if (timeLeft === 0) {
            setBreathingInstruction('');
        }
    }, [timeLeft]);

    return (
        <div>
            <h1>Breathing</h1>
            <div className='breathing5'>
                <button onClick={() => breatheForFiveMinutes(setTimeLeft, setBreathingInstruction)}>
                    Breathe for 5 minutes
                </button>
                {timeLeft > 0 && (
                    <div>
                        <h2>Time Left: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</h2>
                        <h2>{breathingInstruction}</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Breathing;
