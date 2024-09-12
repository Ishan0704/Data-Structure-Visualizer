import './App.css';
import Navbar from './components/Navbar.jsx';
import LinkedList from './components/LinkedList.jsx';
import './utils/Link.js'; // calling text file
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LinkedList/>
    </div>
  );
}

export default App;
