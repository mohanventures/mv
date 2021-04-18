import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
// import Sections from "./components/Sections/Section";
// import Footer from "./components/Footer/Footer";
// import Intro from "./components/Intro/Intro";
// import Form from "./components/Form/Form";
import Contact from "./components/Contact-us/Contact-us";
import Home from "./components/Home"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Business from "./components/Business-developement/Business-developement"
import Consulting from "./components/Consulting/Consulting"
import Education from "./components/Education-services/Education-services"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/contact" component={Contact} />
        <Route path="/business-developement" component={Business} />
        <Route path="/consulting" component={Consulting} />
        <Route path="/education-services" component={Education} />
        </Switch>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
