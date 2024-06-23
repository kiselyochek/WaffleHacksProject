import { useState } from 'react';

const Journal = () => {
    const [entry, setEntry] = useState('');
    const [previousEntries, setPreviousEntries] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState(null);

    const handleSubmit = () => {
        if (entry.trim() !== '') {
            setPreviousEntries([...previousEntries, entry]);
            setEntry('');
        }
    };

    const handleSelectEntry = (index) => {
        setSelectedEntry(previousEntries[index]);
    };

    return (
        <div className="journal-container">
            <div className="previous-entries">
                <ul>
                    {previousEntries.map((entry, index) => (
                        <li key={index} onClick={() => handleSelectEntry(index)}>
                            {entry.slice(0, 30)}...
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="journal">
                    <div className="blank_page">
                    <img
                        src="https://i.pinimg.com/originals/10/c2/37/10c237f71b6805c2f10d4371e848475a.png"
                        alt="Blank Page"
                        className="journal-image"
                    />
                    <textarea
                        className="journal-entry"
                        placeholder="Write here..."
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                    ></textarea>
                    <div className="questions">
                        <h1>Suggested Questions:</h1>
                        <h2>What are you grateful for today?</h2>
                        <h2>What would make today great?</h2>
                        <h2>What is your daily affirmation?</h2>
                        <h2>What are you excited about today?</h2>
                        <h2>How are you feeling today?</h2>
                    </div>
                    {selectedEntry && (
                        <div className="selected-entry">
                            <h1>Selected Entry</h1>
                            <p>{selectedEntry}</p>
                        </div>
                    )}
                </div>
                    <button onClick={handleSubmit} className="submit-button">Save</button>
            </div>
        </div>
    );
};

export default Journal;
