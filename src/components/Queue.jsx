import './Queue.css';
import React, { useState } from 'react';

function Queue() {
    const [number, setNumber] = useState('');
    const [queue, setQueue] = useState([]);
    const [frontElement, setFrontElement] = useState(null);

    const pushQueue = () => {
        if (number === '' || queue.length >= 5) return;
        
        const updatedQueue = [...queue, number];
        setQueue(updatedQueue);
        setNumber('');
        setFrontElement(updatedQueue[0] || null);
    };

    const popQueue = () => {
        if (queue.length === 0) return;

        const [removedElement, ...rest] = queue;
        setQueue(rest);
        setFrontElement(rest[0] || null);
        console.log('Popped:', removedElement);
    };

    let displayContent;

    if (queue.length === 0) {
        displayContent = <div className="message" style={{textAlign: "center"}}>Queue is empty</div>;
    } else if (queue.length >= 5) {
        displayContent = <div className="message" style={{textAlign: "center"}}>Queue is full</div>;
    } else {
        displayContent = (
            <div className="queue-display">
                {queue.map((item, index) => (
                    <div key={index} className="queue-item">
                        {item}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="frame1_queue">
                <input
                    type="number"
                    placeholder="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <button onClick={pushQueue}>Push</button>
                <button style={{ backgroundColor: 'red' }} onClick={popQueue}>Pop</button>
            </div>
            <div className="queue-box">
                <h2 style={{textAlign: "center"}}>Queue:</h2>
                {displayContent}
                {frontElement !== null && (
                    <div className="front-element" style={{textAlign: "center", marginTop: "10px"}}>
                        <strong>Front Element:</strong> {frontElement}
                    </div>
                )}
            </div>
        </>
    );
}

export default Queue;
