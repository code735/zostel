import logo from './logo.svg';
import './App.css';
import Navbar from './Router/Navbar';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state=>state);
  console.log(state)
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
