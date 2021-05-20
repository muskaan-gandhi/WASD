import React from "react";
import {Route} from "react-router";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import Blogs from "./Components/Blogs/Blogs";
import "./App.css";
import NavHolder from "./Components/Common/Header/NavHolder";

function App() {
  return (
    <div className="App">
     <NavHolder></NavHolder>
      <Route path = '/' exact component={HomePage}/>
      <Route path = '/About' component={AboutPage}/>
      <Route path = '/Blog' component={Blogs}/>
    </div>
  );
}

export default App;
