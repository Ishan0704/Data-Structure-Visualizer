import React, { useState } from "react";
import "./Array.css";

const Array = require("../utils/Array");

const ArrayComponent = () => {
    const [arrayValue] = useState(new Array()); 
    const [inputValue, setInputValue] = useState('');
    const [updateOldValue, setUpdateOldValue] = useState('');
    const [updateNewValue, setUpdateNewValue] = useState('');
    const [visualArray, setVisualArray] = useState([]);
    const [inputdata,setInputdata]=useState(false);
    const [updatedata,setUpdatedata]=useState(false);

    const handleInsert = () => {
        if (isNaN(inputValue)) {
            alert("Please enter a valid number");
            return;
        }
    
        const numberValue = Number(inputValue);
        arrayValue.insert(numberValue);
        setInputdata(true);
        setUpdatedata(false);
        setInputValue('');
        displayArray();
    };
    

    const handleDelete = () => {
        setInputdata(true);
        setUpdatedata(false);
        arrayValue.delete(inputValue);
        setInputValue('');
        displayArray();
    };

    const handleSearch = () => {
        setInputdata(true);
        setUpdatedata(false);
        arrayValue.search(inputValue);
        setInputValue('');
    };

    const handleUpdate = () => {
        setInputdata(false);
        setUpdatedata(true);
        arrayValue.update(updateOldValue, updateNewValue);
        setUpdateOldValue('');
        setUpdateNewValue('');
        displayArray();
    };

    const displayArray = () => {
        setVisualArray([...arrayValue.list]);
    };

    return (
        <div className="array-container">
            <h1>Array Operations</h1>
            {inputdata && (<div className="input-data">
                <input
                    type="text"
                    placeholder="Enter Array Element"
                    value={inputValue}

                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>)}

            <div className="input-group">
                <button className="btn insert-btn" onClick={handleInsert}>Insert</button>
                <button className="btn search-btn" onClick={handleSearch}>Search</button>
                <button className="btn delete-btn" onClick={handleDelete}>Delete</button>
                <button className="btn update-btn" onClick={handleUpdate}>Update</button>
            </div>

            {updatedata && (<div className="input-group-update">
                <input
                    type="text"
                    placeholder="Enter Old Value"
                    value={updateOldValue}
                    onChange={(e) => setUpdateOldValue(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter New Value"
                    value={updateNewValue}
                    onChange={(e) => setUpdateNewValue(e.target.value)}
                />
                
            </div>)}

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
