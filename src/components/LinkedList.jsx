import React, { useState } from "react";
import "./LinkedList.css";

const Linked = require("../utils/Linked");
const list = new Linked();

const LinkedList = () => {
const [operation, setOperation] = useState(null);
const [inputValue, setInputValue] = useState("");
const [listItems, setListItems] = useState([]);
const [visiblePopup, setVisiblePopup] = useState(false);

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
const popUpsubmit = () => {
  if (inputValue) {
    switch (operation) {
      case "insertAtHead":
        list.insertAtHead(inputValue);
        break;

      case "insertAtTail":
        list.insertAtTail(inputValue);
        break;

      case "insertAtPosition":
        const pos = window.prompt("Enter the position:");
        if (pos !== null && !isNaN(pos)) {
          const position = parseInt(pos, 10);
          if (position >= 0 && position <= list.getLength()) {
            list.insertAtPosition(inputValue, position);
          } else {
            alert(
              "Please enter a valid position within the list boundaries."
            );
          }
        } else {
          alert("Please enter a valid position.");
        }
        break;

      case "searchByValue":
        list.searchByVal(inputValue);
        
        break;

      case "searchByPosition":
        list.searchByPos(inputValue);
        break;

      case "updateByValue":
        const oldValue = window.prompt("Enter old value: ");
        list.updateByValue(inputValue, oldValue);
        break;

      case "updateAtPosition":
        const updatePos = window.prompt("Enter the position:");
        if (updatePos !== null && !isNaN(updatePos)) {
          const position = parseInt(updatePos, 10);
          if (position >= 0 && position <= list.getLength()) {
            list.updateAtPos(inputValue, position);
          } else {
            alert(
              "Please enter a valid position within the list boundaries."
            );
          }
        } else {
          alert("Please enter a valid position.");
        }
        break;

      default:
        break;
    }
    listDisplay();
    setVisiblePopup(false);
    setInputValue("");
  } else {
    alert("Please enter a value.");
  }
};

const popUpclose = () => {
  setVisiblePopup(false);
  setInputValue("");
};

return (
  <>
    <div className="container1">
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
          <button
            onClick={() => {
              setOperation("insertAtHead");
              setVisiblePopup(true);
            }}
          >
            At Head
          </button>
          <button
            onClick={() => {
              setOperation("insertAtTail");
              setVisiblePopup(true);
            }}
          >
            At Tail
          </button>
          <button
            onClick={() => {
              setOperation("insertAtPosition");
              setVisiblePopup(true);
            }}
          >
            At Position
          </button>
        </div>
      )}

      {operation === "update" && (
        <div className="operation_open">
          <button
            onClick={() => {
              setOperation("updateByValue");
              setVisiblePopup(true);
            }}
          >
            By Value
          </button>
          <button
            onClick={() => {
              setOperation("updateAtPosition");
              setVisiblePopup(true);
            }}
          >
            At Index
          </button>
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
          <button
            onClick={() => {
              setOperation("searchByValue");
              setVisiblePopup(true);
            }}
          >
            By Value
          </button>
          <button
            onClick={() => {
              setOperation("searchByPosition");
              setVisiblePopup(true);
            }}
          >
            By Index
          </button>
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

    {visiblePopup && (
      <div className="popup_message visible">
      <div className="popup-container visible">
        <input
          className="input-number"
          type="number"
          placeholder="Enter the number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button id="submit" onClick={popUpsubmit}>
          Submit
        </button>
        <button id="close" onClick={popUpclose}>
          Close
        </button>
      </div>
    </div>
    )}

    <footer>
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

export default LinkedList;
