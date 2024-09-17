import './Home.css';
import LinkedListData from './LinkedListData';
function Home()
{
    return (
        <div className="home_container">
            <div className="frame1_home">
            <h1>Welcome to DSA Visualizer</h1>
            <p>Our Goal is to deliver clear understanding and visualization of the Data Structures and Algorithms knowledge </p>
            </div>

            <div className="frame2_home">
                <h2>Array</h2>
                <p>Array is collection of similar type of elements.</p>
            </div>

            <div className="frame2_home">
                {/* <h2>Linked List</h2> */}
                <LinkedListData/>
            </div>
            <div className="frame2_home">
                <h2>Stack</h2>
                <p>Stack is data structure which uses LIFO (Last-In-First-Out).</p>
            </div>
            <div className="frame2_home">
                <h2>Queue</h2>
                <p>Queue is data structure which uses FIFO (First-In-First-Out).</p>
            </div>

        </div>
    )
}

export default Home;