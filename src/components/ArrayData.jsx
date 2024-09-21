import React from "react";
import what_is_Array from "../images/what_is_Array.jpg";
import insert_operation from "../images/Insert-Operation-in-Unorted-Array.png";
import insert_at_pos from "../images/Insert-an-element-at-a-specific-position-in-an-Array.png";
import delete_ele from "../images/Delete-Operation-in-Unsorted-Array.png";
import search_ele from "../images/Search-Operation.png";
import "./Array_data.css";
import { useNavigate } from "react-router-dom";

const ArrayData = () => {
  const navigate = useNavigate();

  const visualizeLink = () => {
    navigate("/array-visualizer");
  };
  return (
    <>
      <h2 className="headingArr1" >Array</h2>
      <hr />
      <div className="section">
        <div className="text">
          <p>
          An array is a fundamental data structure in computer science that stores a collection of elements in contiguous memory locations. This arrangement enables efficient access through indexing, allowing elements to be retrieved in constant time. Arrays are widely used for organizing and manipulating data due to their simplicity and speed, making them ideal for tasks like sorting and searching. However, their fixed size can limit flexibility compared to other data structures. Overall, arrays are essential for implementing various algorithms and applications in programming.
          </p>
        </div>
        <div className="image">
          <img src={what_is_Array} alt="What is Array" className="arr_img"/>
        </div>
      </div>

        
      <h2>Insert Operation</h2>
      <hr/>
      <div className="section reverse">
        <div className="text">
          <p>
            1. Insert at the end: In an unsorted array, the insert operation is
            faster as compared to a sorted array because we don’t have to care
            about the position at which the element is to be placed.
          </p>
          {/* <p>Time Complexity: O(1) Auxiliary Space: O(1)</p> */}
          <p>
            2. Insert at any position:Insert operation in an array at any
            position can be performed by shifting elements to the right, which
            are on the right side of the required position.
          </p>
          {/* <p>Time Complexity: O(n) Auxiliary Space: O(1)</p> */}
          <button onClick={visualizeLink} className="btn-visualize">
            Visualize
          </button>
        </div>
        <div className="image">
          <img src={insert_operation} alt="Insert Operation" className="arr_img"/>
        </div>
      </div>

      
      <h2>Update Operation</h2>
      <hr/>
      <div className="section">
        <div className="text">
          <p>
            Updating an element in an array means changing the value of a
            specific element at a given index. This operation is generally
            straightforward and involves the following steps:
          </p>
          <p>
            1. Access the Element: To update an element, you first need to
            access it using its index. In an array, this is done in constant
            time O(1).
          </p>
          <p>
            2. Modify the Value: After accessing the element, you can assign a
            new value to it. This operation also takes constant time O(1).
          </p>
          <button onClick={visualizeLink} className="btn-visualize">
            Visualize
          </button>
        </div>
        <div className="image">
          <img src={insert_at_pos} alt="Insert at Position" className="arr_img"/>
        </div>
      </div>

      
      <h2>Delete Operation</h2>
      <hr/>
      <div className="section reverse">
        <div className="text">
          <p>
          In the delete operation for an array, the process begins by searching for the target element using linear search, which involves iterating through the array to locate the element's index. Once found, the deletion is performed by shifting all subsequent elements one position to the left, effectively overwriting the deleted element. This ensures that there are no gaps in the array. After shifting, it’s important to update the array's size to reflect the removal. Optionally, the last element can be set to a default value to avoid confusion. This method maintains the integrity of the array while allowing for efficient element removal.
          </p>
          <button onClick={visualizeLink} className="btn-visualize">
            Visualize
          </button>
        </div>
        <div className="image">
          <img src={delete_ele} alt="Delete Operation" className="arr_img"/>
        </div>
      </div>

      
      <h2>Search Operation</h2>
      <hr/>
      <div className="section">
        <div className="text">
          <p>
          In an unsorted array, the search operation is typically performed using linear traversal. This involves iterating through the array from the first element to the last. During the traversal, each element is compared to the target value being searched for. If a match is found, the index of the element is returned, indicating its position in the array. If the traversal completes without finding the target, a message indicating that the element is not present can be returned. This approach is straightforward and effective, though it has a time complexity of O(n), making it less efficient for large datasets compared to more advanced search methods.
          </p>
          <button onClick={visualizeLink} className="btn-visualize">
            Visualize
          </button>
        </div>
        <div className="image">
          <img src={search_ele} alt="Search Operation" className="arr_img"/>
        </div>
      </div>
    </>
  );
};

export default ArrayData;
