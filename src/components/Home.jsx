import './Home.css';
import LinkedListData from './LinkedListData';
import ArrayData from './ArrayData';
import StackData from './StackData';
import QueueData from './QueueData';

function Home()
{
    return (
        <div className="home_container">
            <div className="frame1_home">
            <h1>Welcome to DSA Visualizer</h1>
            <p>Our Goal is to deliver clear understanding and visualization of the Data Structures and Algorithms knowledge </p>
            </div>

            <div className="frame4_home">
                <ArrayData/>
            </div>

            <div className="frame4_home">
                {/* <h2>Linked List</h2> */}
                <LinkedListData/>
            </div>
            <div className="frame4_home">
                
                <StackData/>

            </div>
            <div className="frame4_home">
                <h2 >Queue</h2>
                <hr />
                <hr />
                <p style={{textAlign:'justify',fontSize:'1.3rem',margin:'1.5rem'}}>A queue is a linear data structure that follows the First In, First Out (FIFO) principle, meaning that the first element added is the first to be removed. It is similar to a real-life queue, where people line up, and the person at the front is served first. Queues are commonly used in situations where order is important, such as scheduling processes in operating systems, managing tasks in printers, or handling requests in web servers. Basic operations include enqueue (inserting an element at the rear), dequeue (removing an element from the front), peek (viewing the front element), and checking if the queue is empty or full. Queues can be implemented using arrays, linked lists, or other dynamic structures, and they play a crucial role in various algorithms and applications across computer science.</p>
                <QueueData/>
            </div>
            <div>
                <footer className='home-footer'>
                    @Copyright 
                </footer>
            </div>
            
        </div>
    )
}

export default Home;