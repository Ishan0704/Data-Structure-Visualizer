// src/StackComponent.js
import React, { useState } from 'react';
const Stack = require("../utils/Stack");

const StackComponent = () => {
    const [stack] = useState(new Stack(10));
    const [message, setMessage] = useState('');

    const handlePush = () => {
        const input = prompt('Enter an element to push onto the stack:');
        if (input !== null) {
            const error = stack.push(input);
            if (error) {
                setMessage(error);
            } else {
                setMessage(`Element pushed: ${input}`);
            }
        }
    };

    const handlePop = () => {
        const result = stack.pop();
        if (typeof result === 'string') {
            setMessage(result);
        } else {
            setMessage(`Element popped: ${result}`);
        }
    };

    return (
        <div>
            <button onClick={handlePush}>Push</button>
            <button onClick={handlePop}>Pop</button>
            <p>{message}</p>
        </div>
    );
};

export default StackComponent;
