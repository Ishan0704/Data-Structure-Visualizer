import img0 from "../images/stack0.png";
import img1 from "../images/stack1.png";
import img2 from "../images/stack2.png";
import { useNavigate } from "react-router-dom";
import "./Stack_data.css";

const StackData = () => {
  const navigate = useNavigate();

  const visualizeLink = () => {
    navigate("/stack");
  };

  return (
    <>
      <h1 className="stack_heading">Stack</h1>
      <hr />
      <hr />
      <p className="stack_p" style={{textAlign:'justify',padding:'1.3rem'}}> 
        A stack is a linear data structure that follows the Last In, First Out
        (LIFO) principle, meaning that the last element added to the stack is
        the first one to be removed. It can be visualized as a collection of
        items stacked on top of each other, similar to a stack of plates. The
        primary operations of a stack are <b>push</b>, which adds an element to the
        top of the stack, and <b>pop</b>, which removes the top element. Stacks are
        widely used in programming and computer science for various
        applications, including function call management in recursion, undo
        mechanisms in applications, and parsing expressions. Due to their
        structure, stacks can efficiently handle specific problems where order
        of processing is crucial. However, they also have limitations, such as
        the risk of stack overflow if too many elements are pushed onto the
        stack beyond its capacity.
      </p>

      <h2>Push Operation</h2>
      <hr />
      <div className="stack-container">
        <div className="stack-text">
          <ul>
            <p className="stack-example-push" id="stack-common">
              Push Operation in stack is used to insert elements to stack
            </p>
            <p className="stack-example-push" id="stack-common">
              Stack Overflow : Special condition when element is pushed
              and stack is full
            </p>
            <p className="stack-example-push" id="stack-common">
              Example: Assume size of stack is 5
            </p>

            <li>
              <div className="stack-example">
                Push 10 to Stack <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Push 20 to Stack <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Push 30 to Stack <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Push 40 to Stack <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Push 50 to Stack <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Push operation fails <i className="fa-regular fa-circle-xmark"></i>
                <div className="stack-push">
                  Stack Overflow !! Stack size is 5
                </div>
              </div>
            </li>
          </ul>
          <button onClick={visualizeLink} className="btn-visualize-stack">
            Visualize
          </button>
        </div>
        <div>
          <img className="stack-image" src={img0} alt="Push Operation" />
        </div>
      </div>

      <h2 style={{ marginTop: "1vh" }}>Pop Operation</h2>
      <hr />
      <div className="stack-container">
        
        <div className="stack-text-pop">
          <img className="stack-image" src={img2} alt="Pop Operation" />
        </div>

        <div className="stack-text-pop">
          <ul>
            <p className="stack-example-push" id="stack-common">
              Pop operation is used to remove elements from stack
            </p>
            <p className="stack-example-push" id="stack-common">
              Stack Underflow : Special condition when stack is empty
              and still element is popped
            </p>
            <p className="stack-example-push" id="stack-common">
              Example: Assume size of stack is 4
            </p>

            <li>
              <div className="stack-example">
                Pop 40 from stack <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Pop 30 from stack <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Pop 20 from stack <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Pop 10 from stack <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Pop operation fails <i className="fa-regular fa-circle-xmark"></i>
                <div className="stack-push">
                  Stack Underflow !! Stack is Empty
                </div>
              </div>
            </li>
          </ul>
          <button onClick={visualizeLink} className="btn-visualize-stack">
            Visualize
          </button>
        </div>
      </div>

      <h2>Display Top Element</h2>
      <hr />
      <div className="stack-container">
        <div className="stack-text">
          <ul>
            <p className="stack-example-push" id="stack-common">
              In this operation, the top element of the stack is displayed
            </p>
            <p className="stack-example-push" id="stack-common">
              LIFO : As stack is Last In First Out, therefore element
              inserted at last is removed first
            </p>
            <li>
              <div className="stack-example">
                Case : 1 <div className="stack-top">Top : 10</div>
                <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Case : 2 <div className="stack-top">Top : 40</div>
                <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Case : 3 <div className="stack-top">Top : 30</div>
                <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Case : 4 <div className="stack-top">Top : 20</div>
                <i className="fa-regular fa-circle-check"></i>
              </div>
            </li>
            <li>
              <div className="stack-example">
                Display operation fails <i className="fa-regular fa-circle-xmark"></i>
                <div className="stack-push">
                  Stack is Empty !! No top element
                </div>
              </div>
            </li>
          </ul>
          <button onClick={visualizeLink} className="btn-visualize-stack">
            Visualize
          </button>
        </div>
        <div>
          <img className="stack-image" src={img1} alt="Display Top Element" />
        </div>
      </div>
    </>
  );
};

export default StackData;
