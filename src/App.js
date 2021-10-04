import logo from "./logo.svg";
import "./App.css";
import AllClasses from "./component/AllClasses/AllClasses";
import Navbar from "./component/Navbar/Navbar";
import ContactUs from "./component/ContactUs/ContactUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import Class from "./component/Class/Class";
import AboutUs from "./component/AboutUs/AboutUs";
import Error from "./component/Error/Error";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Gallary from "./component/Gallary/Gallary";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/class">
            <Class></Class>
          </Route>

          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/gallary">
            <Gallary></Gallary>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
