import { useState } from 'react';

const Tracker = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };

    const addHabit = () => {
        const habit = document.getElementById('habit').value;
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = habit;
        ul.appendChild(li);
    };
    
    return (
        <div>
        <input type="text" name="habit" id="habit" placeholder='Add Habit'/>
        <button onClick={addHabit}>Add</button>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <div className='habits'>
        <h2>Habits</h2>
        <ul>

        </ul>
        </div>
        </div>
        
    );
    }
export default Tracker;
