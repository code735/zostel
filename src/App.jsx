import logo from './logo.svg';
import './App.css';
import Navbar from './Router/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import AllRoutes from './Router/AllRoutes';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state=>state);


  console.log(state)
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;