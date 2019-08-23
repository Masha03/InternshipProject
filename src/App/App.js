import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";
import About from "../About/About";
import New from "../New/New";
import Popular from "../Popular/Popular";

function App() {
  return (
    <Router>
      <div className="app">
        <Header
          image="https://i.pinimg.com/originals/cd/a3/22/cda322bd9e4ce190ef7e195ec674c146.png"
          menu={[
            { link: "/popular", title: "Popular" },
            { link: "/new", title: "New" },
            { link: "/search", title: "Search" },
          ]}></Header>
        <div className="app-content">
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/new" exact component={New}></Route>
          <Route path="/popular" exact component={Popular}></Route>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
