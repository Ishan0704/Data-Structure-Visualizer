import React, { useState } from 'react';
import './LinkedList.css';

const Linked = require('../utils/Linked');
const list = new Linked();

const LinkedList = () => {
  const [operation, setOperation] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const click_oper = (op) => {
    setOperation(op);
  };

  const handleInsertAtHead = () => {
    if (inputValue) {
      list.insertAtHead(inputValue);
      list.printList();
      setInputValue(''); // Clear the input after insertion
    }
  };

  const handleInsertAtTail = () => {
    if (inputValue) {
      list.insertAtTail(inputValue);
      list.printList();
      setInputValue(''); // Clear the input after insertion
    }
  };

  const handleInsertAtPosition = () => {
    if (inputValue) {
      const pos = window.prompt("Enter the position:");
      if (pos !== null && !isNaN(pos)) {
        const position = parseInt(pos, 10);
        if (position >= 0 && position <= list.getLength()) {
          list.insertAtPosition(inputValue, position);
          list.printList();
          setInputValue(''); // Clear the input after insertion
        } else {
          alert("Please enter a valid position within the list boundaries.");
        }
      } else {
        alert("Please enter a valid position.");
      }
    }
  };  

  const handleSearchByValue = () =>{
    if (inputValue) {
      const res = list.searchByVal(inputValue);
      list.printList();
      if(res===true)
      {
        alert("Value is found");
      }
      console.log(res);
      setInputValue(''); // Clear the input after insertion
    }
  }
  const handleSearchByPosition=()=>{
    if (inputValue)
    {
      list.searchByPos(inputValue);
    }
    setInputValue('');
  }

  const handleUpdateAtHead=()=>{
    if (inputValue) {
      list.updateAtHead(inputValue);
      list.printList();
      setInputValue(''); 
    }
  }
  const handleUpdateAtPosition=()=>{
    if (inputValue) {
      const pos = window.prompt("Enter the position:");
      if (pos !== null && !isNaN(pos)) {
        const position = parseInt(pos, 10);
        if (position >= 0 && position <= list.getLength()) {
          list.updateAtPos(inputValue, position);
          list.printList();
          setInputValue(''); 
        } else {
          alert("Please enter a valid position within the list boundaries.");
        }
      } else {
        alert("Please enter a valid position.");
      }
    }
  }

  const handleDeleteAtHead=()=>{
    list.deleteAtHead();
    list.printList();
  }

  const handleDeleteAtTail=()=>{
    list.deleteAtTail();
    list.printList();
  }

  const handleDeleteAtPos=()=>{
    const pos = window.prompt("Enter the position:");
    const position = parseInt(pos, 10);
    list.deleteAtPos(position);
    list.printList();
  }
  return (
    <>
      <div className="container1">
        <input
          className='input-number'
          type="number"
          placeholder="Enter the number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className="operation_btn">
          <button className="btn_click" onClick={() => click_oper('insert')}>Insert</button>
          <button className="btn_click" onClick={() => click_oper('update')}>Update</button>
          <button className="btn_click" onClick={() => click_oper('search')}>Search</button>
          <button className="btn_click" onClick={() => click_oper('delete')}>Delete</button>
        </div>

        {operation === 'insert' && (
          <div className="operation_open">
            <button onClick={handleInsertAtHead}>At Head</button>
            <button onClick={handleInsertAtTail}>At Tail</button>
            <button onClick={handleInsertAtPosition}>At Position</button>
          </div>
        )}

        {operation === 'update' && (
          <div className="operation_open">
            <button onClick={handleUpdateAtHead}>At Head</button>
            <button onClick={handleUpdateAtPosition}>At Position</button>
          </div>
        )}

        {operation === 'delete' && (
          <div className="operation_open">
            <button onClick={handleDeleteAtHead}>At Head</button>
            <button onClick={handleDeleteAtTail}>At Tail</button>
            <button onClick={handleDeleteAtPos}>At Position</button>
          </div>
        )}

        {operation === 'search' && (
          <div className="operation_open">
            <button onClick={handleSearchByValue} >By Value</button>
            <button onClick={handleSearchByPosition}>By Index</button>
          </div>
        )}
      </div>

      <div className='reference'>
        For more details visit - 
        <a className='link' href="https://www.geeksforgeeks.org/linked-list-data-structure/" target='_blank' rel='noopener noreferrer'>
          https://www.geeksforgeeks.org/linked-list-data-structure
        </a>
      </div>
    </>
  );
};

export default LinkedList;
