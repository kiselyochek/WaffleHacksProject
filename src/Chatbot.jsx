import React, { useState } from 'react';

const Chatbot = () => {
    const [inputText, setInputText] = useState(''); 
    const [chatHistory, setChatHistory] = useState([]); 

    
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        
        const response = await fetch('/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ message: inputText }), 
        });

        if (response.ok) {
            const data = await response.json(); 
            console.log('Chatbot Response:', data.message);
            const newChat = [...chatHistory]; 
            newChat.push({ text: inputText, fromUser: true }); 
            newChat.push({ text: data.message, fromUser: false }); 
            setChatHistory(newChat); 
            setInputText(''); 
        }
    };

    
    const handleChange = (e) => {
        setInputText(e.target.value); 
    };

    return (
        <div>
            {/* Chat history display */}
            <div style={{backgroundColor: '#F5C5C5', maxWidth: '600px', minHeight: '400px', maxHeight: '600px', overflowY: 'scroll', border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '5px', color: 'black'}}>
                {chatHistory.map((chat, index) => (
                    <div key={index} style={{ marginBottom: '10px', textAlign: chat.fromUser ? 'right' : 'left' }}>
                        <p style={{ margin: '5px' }}>{chat.text}</p>
                    </div>
                ))}
            </div>
            
            {/* Form for user input */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input type="text" value={inputText} onChange={handleChange} placeholder="Type your message..." style={{ width: '70%', padding: '10px', borderRadius: '5px', border: '1px solid black' }} />
                <button type="submit" style={{ marginLeft: '10px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
