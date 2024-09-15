import React, { useState } from "react";
import "./Stack.css";

const Stack = require('../utils/Stack');

const StackComponent = () => {
    const [isSizeEntered, setIsSizeEntered] = useState(false);
    const [list, setList] = useState(null);
    const [elements, setElements] = useState([]);

    const input = () => {
        let data = prompt("Enter Size of Stack");
        const size = Number(data);

        if (size > 10) {
            alert("Enter size less than or equal to 10");
            input();
        } else if (size <= 0 || isNaN(size)) {
            alert("Enter size greater than 0");
            input();
        } else {
            const newStack = new Stack(size);
            setList(newStack);
            setIsSizeEntered(true);
            setElements(newStack.getStack()); 
        }
    }

    const handlePush = () => {
        if (list) {
            const data = prompt("Enter Element of Stack");
            list.push(data);
            setElements([...list.getStack()]); 
        }
    }

    const handlePop = () => {
        if (list) {
            list.pop();
            setElements([...list.getStack()]); 
        }
    }

    const displayTop = () => {
        if (list) {
            alert(`Top element is: ${list.top()}`);
        }
    }

    return (
        <>
            {!isSizeEntered ? (
                <button onClick={input}>Enter Max Size of Stack</button>
            ) : (
                <>
                    <button className="operations" onClick={handlePush}>Push</button>
                    <button className="operations" onClick={handlePop}>Pop</button>
                    <button className="operations" onClick={displayTop}>Top</button>
                    <div>
                        <h3>Stack Elements:</h3>
                        <ul>
                            {elements.length > 0 ? (
                                elements.map((el, index) => (
                                    <li key={index}>{el}</li>
                                ))
                            ) : (
                                <li>The stack is empty.</li>
                            )}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
}

export default StackComponent;
