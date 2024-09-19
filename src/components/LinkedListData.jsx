import React from "react";
import { useNavigate } from "react-router-dom";
import nodeImg from "../images/nodeImage.png";
import insertHead from "../images/Insert_at_head.png";
import insertTail from "../images/Insert_at_tail.png";
import insertPos from "../images/insert_at_pos.png";
import deleteHead from "../images/delete_at_head.png";
import deleteTail from "../images/delete_at_tail.png";
import deletePos from "../images/delete_at_pos.png";
import updateVal from "../images/update_by_val.png";
import updateIndex from "../images/update_by_index.png";
import searchVal from "../images/search_by_val.png";
import searchIndex from "../images/search_by_index.png";
import "./LinkedListData.css";

function LinkedListData() {
  const navigate = useNavigate();

  const visualizeLink = () => {
    navigate("/linkedlist");
  };
  return (
    <div className="linkedMainContainer">
      <h1 className="heading1">Linked List</h1>
      <hr />
      <div className="frame1_data">
        <p style={{ textAlign: "justify" }}>
          A linked list is a data structure used in computer science to organize
          a sequence of elements. Each element, or "node," contains two parts:
          the data itself and a reference (or "link") to the next node in the
          sequence. This allows for efficient insertion and deletion of
          elements, as nodes can be easily rearranged without shifting the
          entire list. Unlike arrays, linked lists don't require contiguous
          memory locations, making them more flexible for certain operations.
          However, accessing elements in a linked list can be slower compared to
          arrays, as it typically requires traversing the list from the
          beginning to reach a specific node.
        </p>
        <img
          src={nodeImg}
          alt="Node Diagram"
          id="nodemainImg"
          className="commonimg"
        />
      </div>

      {/* Insert */}
      <div className="frame2_data">
        <h2 className="heading2">Insert</h2>

        <p className="content">
          Inserting a new element into a linked list involves adding a node to
          the list while maintaining the list's structure. There are different
          types of insertion operations depending on where you want to add the
          new node:
        </p>

        <h3 className="heading3">Insert At Head</h3>
        <div className="insert_at_head">
          <img
            src={insertHead}
            alt="Node Diagram"
            id="image"
            className="commonimg"
          />
          <div id="text-content">
            <ul>
              <li>
                <b>Objective:</b> Add a new node at the start of the linked
                list.
              </li>
            </ul>
            <ul>
              <li>
                <b>Process:</b>
              </li>
              <li>Create a new node.</li>
              <li>
                Set the new node's next pointer to point to the current head of
                the list.
              </li>
              <li>Update the head of the list to point to the new node.</li>
              <button onClick={visualizeLink} className="btn-visualize">
                Visualize
              </button>
            </ul>
          </div>
        </div>

        <h3 className="heading3">Insert At Tail</h3>
        <div className="insert_at_tail">
          <div id="text-content">
            <ul>
              <li>
                <b>Objective:</b> Add a new node at the end of the linked list.
              </li>
            </ul>
            <ul>
              <li>
                <b>Process:</b>
              </li>
              <li>Traverse the list to find the last node.</li>
              <li>Create a new node.</li>
              <li>Set the last node's next pointer to the new node.</li>
              <li>Set the new node's next pointer to null.</li>
              <button onClick={visualizeLink} className="btn-visualize">
                Visualize
              </button>
            </ul>
          </div>
          <img
            src={insertTail}
            alt="Node Diagram"
            className="right_img commonimg"
            id="image"
          />
        </div>

        <h3 className="heading3">Insert At Any Position</h3>
        <div className="insert_at_pos">
          <img
            src={insertPos}
            alt="Node Diagram"
            id="image"
            className="commonimg"
          />
          <div id="text-content">
            <ul>
              <li>
                <b>Objective:</b> Add a new node at a specific position in the
                linked list.
              </li>
            </ul>
            <ul>
              <li>
                <b>Process:</b>
              </li>
              <li>
                Traverse the list to find the node at the position before the
                desired insert position.
              </li>
              <li>Create a new node.</li>
              <li>
                Set the new node's next pointer to the next pointer of the
                previous node.
              </li>
              <li>Update the previous node's next pointer to the new node.</li>
              <button onClick={visualizeLink} className="btn-visualize">
                Visualize
              </button>
            </ul>
          </div>
        </div>
      </div>

      {/* Delete */}
      <div className="frame3_data">
        <h2 className="heading2">Delete</h2>

        <p className="content">
          Deleting a node in a linked list involves updating the pointer of the
          preceding node to bypass the node being removed. If the node to delete
          is the head, the head pointer is updated to the next node, and the
          memory of the removed node is freed. This ensures the list remains
          properly linked and functional.
        </p>

        <h3 className="heading3">Delete At Head</h3>
        <div className="delete_at_head">
          <img
            src={deleteHead}
            alt="Node Diagram"
            id="image"
            className="commonimg"
          />
          <div id="text-content">
            <ul>
              <li>
                <b>Objective:</b> Remove the first node from the linked list.
              </li>
            </ul>
            <ul>
              <li>
                <b>Process:</b>
              </li>
              <li>Identify the current head of the linked list.</li>
              <li>
                Set the head pointer to point to the next node in the list,
                effectively removing the current head node from the list.
              </li>
              <li>
                Free the memory allocated for the old head node to avoid memory
                leaks.
              </li>
              <li>
                Update the linked list’s head reference to the new first node.
              </li>
              <li>
                Ensure all references to the old head node are removed or
                updated appropriately.
              </li>
              <button onClick={visualizeLink} className="btn-visualize">
                Visualize
              </button>
            </ul>
          </div>
        </div>

        <h3 className="heading3">Delete At Tail</h3>
        <div className="delete_at_tail">
          <div id="text-content">
            <ul>
              <li>
                <b>Objective:</b> Remove the last node from the linked list.
              </li>
            </ul>
            <ul>
              <li>
                <b>Process:</b>
              </li>
              <li>Traverse the list to find the second-to-last node.</li>
              <li>Set the second-to-last node's next pointer to null.</li>
              <li>Free the memory of the last node.</li>
              <button onClick={visualizeLink} className="btn-visualize">
                Visualize
              </button>
            </ul>
          </div>

          <img
            src={deleteTail}
            alt="Node Diagram"
            id="image deleteImg"
            className="right_img commonimg"
          />
        </div>

        <h3 className="heading3">Delete At Any Position</h3>
        <div className="delete_at_pos">
          <img
            src={deletePos}
            alt="Node Diagram"
            id="image"
            className="commonimg"
          />
          <div id="text-content">
            <ul>
              <li>
                <b>Objective:</b> Remove a node at a specific position in the
                linked list.
              </li>
            </ul>
            <ul>
              <li>
                <b>Process:</b>
              </li>
              <li>
                Traverse the list to find the node just before the desired
                position.
              </li>
              <li>
                Update the previous node's next pointer to skip the node to be
                deleted.
              </li>
              <li>Free the memory of the node to be deleted.</li>
              <button onClick={visualizeLink} className="btn-visualize">
                Visualize
              </button>
            </ul>
          </div>
        </div>
      </div>

      {/* Update */}
      <div className="frame4_data">
        <h2 className="heading2">Update</h2>

        <p className="content">
          Updating a node in a linked list involves traversing the list to
          locate the node at a specific index or with a given value. Once
          identified, the node's value is modified to the new value. If the node
          is not found, an appropriate error or indication is given.
        </p>

        <h3 className="heading3">Update By Value</h3>
        <div className="update_by_val">
          <img
            src={updateVal}
            alt="Node Diagram"
            id="image"
            className="commonimg"
          />
          <div id="text-content">
            <ul>
              <li>
                <b>Objective:</b> Update the value of a node in the linked list
                based on its value.
              </li>
            </ul>
            <ul>
              <li>
                <b>Process:</b>
              </li>
              <li>Traverse the list to find the node with the target value.</li>
              <li>Update the node's value with the new value.</li>
              <button onClick={visualizeLink} className="btn-visualize">
                Visualize
              </button>
            </ul>
          </div>
        </div>

        <h3 className="heading3">Update By index</h3>
        <div className="update_at_pos">
          <div id="text-content">
            <ul>
              <li>
                <b>Objective:</b> Update the value of a node at a specific index
                in the linked list.
              </li>
            </ul>
            <ul>
              <li>
                <b>Process:</b>
              </li>
              <li>Traverse the list to the node at the specified index.</li>
              <li>Update the node's value with the new value.</li>
              <button onClick={visualizeLink} className="btn-visualize">
                Visualize
              </button>
            </ul>
          </div>

          <img
            src={updateIndex}
            alt="Node Diagram"
            id="image"
            className="right_img commonimg"
          />
        </div>
      </div>

      {/* Search */}
      <div className="frame5_data">
        <h2 className="heading2">Search</h2>

        <p className="content">
          Searching in a linked list involves traversing the list from the head
          to find a node with a specific value or at a given index. If the node
          is found, its value or position is returned; otherwise, an indication
          of the absence is provided.
        </p>

        <h3 className="heading3">Search By Value</h3>
        <div className="update_by_val">
          <img
            src={searchVal}
            alt="Node Diagram"
            id="image"
            className="commonimg"
          />
          <div id="text-content">
            <ul>
              <li>
                <b>Objective:</b> Find a node with a specific value in the
                linked list.
              </li>
            </ul>
            <ul>
              <li>
                <b>Process:</b>
              </li>
              <li>
                Traverse the list while comparing each node's value to the
                target value.
              </li>
              <li>If the value is found, return the node or its position.</li>
              <li>
                If the end of the list is reached without finding the value,
                indicate that the value is not present.
              </li>
              <button onClick={visualizeLink} className="btn-visualize">
                Visualize
              </button>
            </ul>
          </div>
        </div>

        <h3 className="heading3">Search By index</h3>
        <div className="update_at_pos">
          <div id="text-content">
            <ul>
              <li>
                <b>Objective:</b> Retrieve the value of the node at a specific
                index in the linked list.
              </li>
            </ul>
            <ul>
              <li>
                <b>Process:</b>
              </li>
              <li>Traverse the list to the node at the specified index.</li>
              <li>Return the node's value.</li>
              <li>
                If the index is out of bounds, indicate an error or that the
                index is invalid.
              </li>
              <button onClick={visualizeLink} className="btn-visualize">
                Visualize
              </button>
            </ul>
          </div>

          <img
            src={searchIndex}
            alt="Node Diagram"
            id="image"
            className="right_img commonimg"
          />
        </div>
      </div>
    </div>
  );
}

export default LinkedListData;
