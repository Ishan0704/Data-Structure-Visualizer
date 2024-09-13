import React, { useState } from "react";
import "./LinkedList.css";

const Linked = require("../utils/Linked");
const list = new Linked();

const LinkedList = () => {
  const [operation, setOperation] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);
  const [visiblePopup,setVisiblePopup]=useState(false);
  const click_oper = (op) => {
    setOperation(op);
  };

  const listDisplay = () => {
    const items = [];
    let curr = list.head;
    while (curr != null) {
      items.push(curr.data);
      curr = curr.next;
    }
    setListItems(items);
  };

  const popUpsubmit=()=>{
    alert("Successful");
    setVisiblePopup(false);
    listDisplay();
    // setInputValue("");
  }

  const popUpclose=()=>{
    setVisiblePopup(false);
    listDisplay();
    // setInputValue("");
  }
  const handleInsertAtHead = () => {
    setVisiblePopup(true);
    if (inputValue) {
      list.insertAtHead(inputValue);
      list.printList();
      // listDisplay();
      
      setInputValue(""); // Clear the input after insertion
    }
  };

  const handleInsertAtTail = () => {
    setVisiblePopup(true);
    if (inputValue) {
      list.insertAtTail(inputValue);
      list.printList();
      // listDisplay();
      // setVisiblePopup(true);
      setInputValue(""); // Clear the input after insertion
    }
  };

  const handleInsertAtPosition = () => {
    setVisiblePopup(true);
    if (inputValue) {
      const pos = window.prompt("Enter the position:");
      if (pos !== null && !isNaN(pos)) {
        const position = parseInt(pos, 10);
        if (position >= 0 && position <= list.getLength()) {
          list.insertAtPosition(inputValue, position);
          list.printList();
          // listDisplay();
          setInputValue(""); // Clear the input after insertion
        } else {
          alert("Please enter a valid position within the list boundaries.");
        }
      } else {
        alert("Please enter a valid position.");
      }
    }
  };

  const handleSearchByValue = () => {
    setVisiblePopup(true);
    if (inputValue) {
      const res = list.searchByVal(inputValue);
      list.printList();
      // listDisplay();
      if (res === true) {
        alert("Value is found");
      }
      console.log(res);
      setInputValue(""); // Clear the input after insertion
    }
  };
  const handleSearchByPosition = () => {
    setVisiblePopup(true);
    if (inputValue) {
      list.searchByPos(inputValue);
    }
    setInputValue("");
  };

  const handleUpdateByValue = () => {
    setVisiblePopup(true);
    if (inputValue) {
      const oldvalue = window.prompt("Enter old value: ");
      list.updateByValue(inputValue, oldvalue);
      list.printList();
      // listDisplay();
      setInputValue("");
    }
  };
  const handleUpdateAtPosition = () => {
    setVisiblePopup(true);
    if (inputValue) {
      const pos = window.prompt("Enter the position:");
      if (pos !== null && !isNaN(pos)) {
        const position = parseInt(pos, 10);
        if (position >= 0 && position <= list.getLength()) {
          list.updateAtPos(inputValue, position);
          list.printList();
          // listDisplay();
          setInputValue("");
        } else {
          alert("Please enter a valid position within the list boundaries.");
        }
      } else {
        alert("Please enter a valid position.");
      }
    }
  };

  const handleDeleteAtHead = () => {
    list.deleteAtHead();
    list.printList();
    listDisplay();
  };

  const handleDeleteAtTail = () => {
    list.deleteAtTail();
    list.printList();
    listDisplay();
  };

  const handleDeleteAtPos = () => {
    const pos = window.prompt("Enter the position:");
    const position = parseInt(pos, 10);
    list.deleteAtPos(position);
    list.printList();
    listDisplay();
  };
  return (
    <>
      <div className="container1">
        {/* <input
          className="input-number"
          type="number"
          placeholder="Enter the number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} */}
        {/* /> */}

        <div className="operation_btn">
          <button className="btn_click" onClick={() => click_oper("insert")}>
            Insert
          </button>
          <button className="btn_click" onClick={() => click_oper("update")}>
            Update
          </button>
          <button className="btn_click" onClick={() => click_oper("search")}>
            Search
          </button>
          <button className="btn_click" onClick={() => click_oper("delete")}>
            Delete
          </button>
        </div>

        {operation === "insert" && (
          <div className="operation_open">
            <button onClick={handleInsertAtHead}>At Head</button>
            <button onClick={handleInsertAtTail}>At Tail</button>
            <button onClick={handleInsertAtPosition}>At Position</button>
          </div>
        )}

        {operation === "update" && (
          <div className="operation_open">
            <button onClick={handleUpdateByValue}>By Value</button>
            <button onClick={handleUpdateAtPosition}>At Index</button>
          </div>
        )}

        {operation === "delete" && (
          <div className="operation_open">
            <button onClick={handleDeleteAtHead}>At Head</button>
            <button onClick={handleDeleteAtTail}>At Tail</button>
            <button onClick={handleDeleteAtPos}>At Position</button>
          </div>
        )}

        {operation === "search" && (
          <div className="operation_open">
            <button onClick={handleSearchByValue}>By Value</button>
            <button onClick={handleSearchByPosition}>By Index</button>
          </div>
        )}
      </div>

    

      <div className="linkedDisplay">
        <h1>Linked list:</h1>
        <div className="list">
          {listItems.map((item, index) => (
            <div key={index} className="node">
              <div className="item-box">
                <div className="item">{item}</div>
              </div>
              {index < listItems.length - 1 && <div className="arrow">→</div>}
            </div>
          ))}
        </div>
      </div>

      {visiblePopup &&<div className="popup_message">
        <div className="popup-container">
          <input
            className="input-number"
            type="number"
            placeholder="Enter the number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button id="submit" onClick={popUpsubmit}>Submit</button>
          <button id="close" onClick={popUpclose}>Close</button>
        </div>
      </div>}

      <footer>
        {" "}
        <div className="reference">
          For more details visit -
          <a
            className="link"
            href="https://www.geeksforgeeks.org/linked-list-data-structure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.geeksforgeeks.org/linked-list-data-structure
          </a>
        </div>
      </footer>
    </>
  );
};