
import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Alert from "./components/Alert";
import TextForm from './components/TextForm';
import About from './components/About';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



// let name = "Harry"
function App() {

  const [mode, setMode] = useState("light");//wheather dark mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({

      msg: message,
      type: type

    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";

      showAlert("Dark Mode has been enabled", "success");

      document.title = "TexUtils - Dark Mode";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";

      showAlert("Light Mode has been enabled", "success");

      document.titlr = "TexUtils - Light Mode";
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" homeText="Home TextUtils" mode={mode} toggleMode={toggleMode} /> */}
      <Router>
        
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className='container my-3'>

          <Routes>

            <Route exact path="/" element={< TextForm showAlert={showAlert} heading="Enter text here" mode={mode} />} />

            <Route exact path="/about" element={< About />} />


          </Routes>

        </div>


      </Router>
    </>
  );
}

export default App;
