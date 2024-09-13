import './Stack.css';
import React, { useState } from 'react';

function Stack() {
    const [number, setNumber] = useState('');
    const [stack, setStack] = useState([]);

    const pushStack = () => {
        if (number === '' || stack.length > 5) return;
        
        setStack(stack => [...stack, number]);
        console.log('Pushed:', number);
        setNumber('');
    };

    const popStack = () => {
        if (stack.length === 0) return;

        setStack(stack => stack.slice(0, -1));
        console.log('Popped:', stack[stack.length - 1]);
    };

    let displayContent;

    if (stack.length === 0) {
        displayContent = <div className="message" style={{textAlign:"center"}}>Stack is empty</div>;
    } else if (stack.length > 5) {
        displayContent = <div className="message" style={{textAlign:"center"}}>Stack is full</div>;
    } else {
        displayContent = (
            <div className="stack-display">
                {stack.map((item, index) => (
                    <div key={index} className="stack-item">
                        {item}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="frame1">
                <input
                    type="number"
                    placeholder="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <button onClick={pushStack}>Push</button>
                <button style={{ backgroundColor: 'red' }} onClick={popStack}>Pop</button>
            </div>
            <div className="stack-box">
                <h2 style={{textAlign:"center"}}>Stack:</h2>
                {displayContent}
            </div>
        </>
    );
}

export default Stack;
