import React, { useState } from 'react';
import './LinkedList.css';

const LinkedList = () => {
  const [operation, setOperation] = useState(null);

  const click_oper = (op) => {
    setOperation(op);
  };

  return (
    <div className="container1">
      <input type="number" placeholder="Enter the number" />

      <div className="operation_btn">
        <button className="btn_click" onClick={() => click_oper('insert')}>Insert</button>
        <button className="btn_click" onClick={() => click_oper('update')}>Update</button>
        <button className="btn_click" onClick={() => click_oper('search')}>Search</button>
        <button className="btn_click" onClick={() => click_oper('delete')}>Delete</button>
      </div>

      {operation === 'insert' && (
        <div className="operation_open">
          <button>At Head</button>
          <button>At Tail</button>
          <button>At Position</button>
        </div>
      )}

      {operation === 'update' && (
        <div className="operation_open">
          <button>At Head</button>
          <button>At Position</button>
        </div>
      )}

      {operation === 'delete' && (
        <div className="operation_open">
          <button>At Head</button>
          <button>At Tail</button>
          <button>At Position</button>
        </div>
      )}

      {operation === 'search' && (
        <div className="operation_open">
          <button>By Value</button>
          <button>By Position</button>
        </div>
      )}
    </div>
  );
};

export default LinkedList;
