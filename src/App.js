
import Aos from "aos";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import WhatsApp from "./Components/WhatsApp";
import {useEffect} from 'react'

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BrowserRouter >

<div className="App">
      
      <Navbar />
       <WhatsApp />  
      <Routes>
        <Route exct path="/" element={<Home/>}></Route>
      </Routes>
          
   </div>
    </BrowserRouter>
   
  );
}

export default App;
