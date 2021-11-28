
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter >

<div className="App">
      
      <Navbar />
      
      <Routes>
        <Route exct path="/" element={<Home/>}></Route>
      </Routes>

   </div>
    </BrowserRouter>
   
  );
}

export default App;
