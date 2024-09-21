import React from "react";
import "./Queue_data.css";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import enqueueImg from "../images/enqueue.png";
import dequeueImg from "../images/dequeue.png";
import frontImg from "../images/front.png";

const QueueData = () => {
  const navigate = useNavigate(); // useNavigate hook must be inside the component

  const visualizeLink = () => {
    navigate("/queue-visualizer");
  };

  return (
    <>
      <h2 className="heading1">Queue</h2>
      <hr />
      <p className="queue-info">
        A queue is a linear data structure that follows the First In, First Out
        (FIFO) principle, meaning that the first element added is the first to
        be removed. It is similar to a real-life queue, where people line up,
        and the person at the front is served first. Queues are commonly used in
        situations where order is important, such as scheduling processes in
        operating systems, managing tasks in printers, or handling requests in
        web servers. Basic operations include enqueue (inserting an element at
        the rear), dequeue (removing an element from the front), peek (viewing
        the front element), and checking if the queue is empty or full. Queues
        can be implemented using arrays, linked lists, or other dynamic
        structures, and they play a crucial role in various algorithms and
        applications across computer science.
      </p>
      <h3 className="operationTitle">Enqueue Operation</h3>
      {/* <hr /> */}
      <div className="queueOperation enqueue">
        <div className="operationDetails">
          <img src={enqueueImg} alt="Enqueue Operation" id="queueImage" />
        </div>
        <div className="operationDescription">
          <ul>
            <li>
              The enqueue operation adds an element to the end (rear) of the
              queue.
            </li>
            <li>It follows the First-In-First-Out (FIFO) principle.</li>
            <li>
              After enqueuing, the new element is placed after the last element
              in the queue.
            </li>
            <li>Example: Queue [1, 2, 3], enqueue 4 → [1, 2, 3, 4]</li>
          </ul>
          <button onClick={visualizeLink} className="btn-visualize-queue">
              Visualize
            </button>
        </div>
      </div>

      <h3 className="operationTitle">Dequeue Operation</h3>
      {/* <hr /> */}
      <div className="queueOperation dequeue">
        <div className="operationDescription">
          <ul>
            <li>
              The dequeue operation removes an element from the front of the
              queue.
            </li>
            <li>
              The oldest element in the queue is removed first, adhering to the
              FIFO principle.
            </li>
            <li>
              Once dequeued, the queue shrinks by removing the first element.
            </li>
            <li>Example: Queue [1, 2, 3], dequeue → [2, 3]</li>
          </ul>
          <button onClick={visualizeLink} className="btn-visualize-queue">
              Visualize
            </button>
        </div>
        <div className="operationDetails">
          <img src={dequeueImg} alt="Dequeue Operation" />
        </div>
      </div>

      <h3 className="operationTitle">Front Element</h3>
      {/* <hr /> */}
      <div className="queueOperation front">
        <div className="operationDetails">
          <img src={frontImg} alt="Front Operation" />
        </div>
        <div className="operationDescription shift-left">
          <ul>
            <li>
              The front operation retrieves the element at the front without
              removing it.
            </li>
            <li>
              This helps in checking which element is next in line to be
              dequeued.
            </li>
            <li>
              It is useful when you need to inspect the next item without
              modifying the queue.
            </li>
            <li>Example: Queue [1, 2, 3], front → 1</li>
          </ul>
          <button onClick={visualizeLink} className="btn-visualize-queue">
              Visualize
            </button>
        </div>
      </div>
    </>
  );
};

export default QueueData;
