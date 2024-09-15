import React, { useState } from "react";
import "./Array.css";
const ArrayClass = require("../utils/Array");

const ArrayComponent = () => {
    const [arrayValues] = useState(new ArrayClass()); 
    const [inputValue, setInputValue] = useState('');
    const [updateOldValue, setUpdateOldValue] = useState('');
    const [updateNewValue, setUpdateNewValue] = useState('');
    const [visualArray, setVisualArray] = useState([]);
    const [inputMode, setInputMode] = useState(true); 

    const handleInsert = () => {
        if (isNaN(inputValue) || inputValue === '') {
            alert("Please enter a valid number");
            return;
        }

        arrayValues.insert(Number(inputValue));
        setInputValue('');
        displayArray();
    };

    const handleDelete = () => {
        arrayValues.delete(Number(inputValue));
        setInputValue('');
        displayArray();
    };

    const handleSearch = () => {
        arrayValues.search(Number(inputValue));
        setInputValue('');
    };

    const handleUpdate = () => {
        setInputMode(false);
    };

    const updateElements = () => {
        if (isNaN(updateOldValue) || isNaN(updateNewValue) || updateOldValue === '' || updateNewValue === '') {
            alert("Please enter valid numbers for both old and new values");
            return;
        }

        arrayValues.update(Number(updateOldValue), Number(updateNewValue));
        setUpdateOldValue('');
        setUpdateNewValue('');
        setInputMode(true);
        displayArray();
    };

    const displayArray = () => {
        setVisualArray([...arrayValues.list]);
    };

    return (
        <div className="array-container">
            <h1>Array Operations</h1>

            {inputMode && (
                <div className="input-data">
                    <input
                        type="text"
                        placeholder="Enter Array Element"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
            )}

            <div className="input-group">
                <button className="btn insert-btn" onClick={handleInsert}>Insert</button>
                <button className="btn search-btn" onClick={handleSearch}>Search</button>
                <button className="btn delete-btn" onClick={handleDelete}>Delete</button>
                <button className="btn update-btn" onClick={handleUpdate}>Update</button>
            </div>

            {!inputMode && (
                <div className="input-group-update">
                    <input
                        type="number"
                        placeholder="Enter Old Value"
                        value={updateOldValue}
                        onChange={(e) => setUpdateOldValue(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Enter New Value"
                        value={updateNewValue}
                        onChange={(e) => setUpdateNewValue(e.target.value)}
                    />
                    <button onClick={updateElements}>Update Element</button>
                </div>
            )}

            <div className="array-display">
                <h2>Array Elements:</h2>
                {visualArray.length === 0 ? (
                    <p>Array is empty</p>
                ) : (
                    <div className="array-visual">
                        {visualArray.map((item, index) => (
                            <div key={index} className="array-item">
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArrayComponent;
