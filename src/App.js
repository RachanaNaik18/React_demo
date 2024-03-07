import React, { useState } from "react";
import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(){
  const [modeTheme, setDarkMode] = useState('light'); //Weather Darkkmode is enable or not
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    }, 1500)
  }


  const toggleMode = ()=>{
    if(modeTheme === "dark"){
      setDarkMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Lightmode has been enabled" , "warning")
    }
    else{
      setDarkMode('dark');
      document.body.style.backgroundColor = '#142753'
      document.body.style.color = 'white'
      showAlert("Darkmode has been enabled" , "success")

    }
  }

  
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={modeTheme} togglemode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3 ">
      <Switch>
          <Route exact path="/about">
            <About mode={modeTheme} />
          </Route>
          <Route exact path="/">
              <TextForm heading="Enter Your Text Here" mode={modeTheme} showAlert={showAlert}  />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
