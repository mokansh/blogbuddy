import React from "react";
import Header from "./Header.jsx";
import Home from "./home.jsx";
import About from "./about.jsx"
import Footer from "./footer.jsx";
import FullBlog from "./fullblog.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from "./content.jsx";
import TextBlog from "./textblog.jsx";

function App() {
  return (
    <Router>

      <Header />
      <Content />



      <Route exact path="/">
      <Home />
      <TextBlog />
      </Route>

      <Route exact path="/fullblog">

      <FullBlog />
      </Route>

      <Route exact path="/about">

      <About />
      </Route>


    <Footer />
    </Router>
  );
}

export default App;
