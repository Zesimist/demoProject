
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   //Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>
      setAlert(null)
      , 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      showAlert("Light mode has been enabled", "success")
    }
    else {
      setMode('dark')
      showAlert("dark mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TestTing" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to Analyze" />
            {/* </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
