import React, { useState, useEffect } from 'react';
import './Queue.css';
const Queue = require("../utils/Queue");

const Queuefunc = () => {
    const [maxSize, setMaxSize] = useState(null);
    const [queue, setQueue] = useState(null);
    const [elements, setElements] = useState([]);

    useEffect(() => {
        if (maxSize !== null) {
            const newQueue = new Queue(maxSize);
            setQueue(newQueue);
            setElements(newQueue.getElements());
        }
    }, [maxSize]);

    const initializeQueue = () => {
        const size = prompt("Enter the maximum size of the queue:");
        if (size != null && !isNaN(size) && size > 0 && size<=10) {
            setMaxSize(Number(size));
        } else {
            alert("Please enter a value between 1 to 10");
        }
    };

    const enqueue = () => {
        if (queue) {
            const a = prompt("Enter the number ");
            if (a != null && !isNaN(a)) {
                queue.push_from_rear(Number(a));
                updateElements(); 
            } else {
                alert("Please enter valid input");
            }
        }
    };

    const dequeue = () => {
        if (queue) {
            queue.pop_from_front();
            updateElements(); 
        }
    };

    const frontEle = () => {
        if (queue) {
            const front = queue.front_ele();
            alert(`Front Element: ${front}`);
        }
    };

    const updateElements = () => {
        if (queue) {
            setElements(queue.getElements()); 
        }
    };

    return (
        <div className="queue_container">
            {maxSize === null ? (
                <button onClick={initializeQueue}>Enter Max Size</button>
            ) : (
                <>
                <div className="btn">
                    <button onClick={enqueue}>Enqueue</button>
                    <button onClick={dequeue}>Dequeue</button>
                    <button onClick={frontEle}>Front Element</button>
                    </div>
                    <div >
                        <h3>Queue Elements:</h3>
                        <div className="display-elements">
                            {elements.map((element, index) => (
                                <div key={index}>{element}</div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Queuefunc;
