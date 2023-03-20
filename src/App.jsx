import logo from './images/logo.png';
import './App.css';
import Navbar from './Router/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import AllRoutes from './Router/AllRoutes';
import Footer from './Router/Footer'
import { Helmet } from 'react-helmet';


function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);


  console.log(state)
  return (
    <div className="App">
      <Helmet>
        <link rel="icon" type="image/png" href={logo} sizes="16x16" />
      </Helmet>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;