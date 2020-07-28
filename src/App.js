import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import Travel from "./pages/Travel";
import Artwork from "./pages/Artwork";
import Error from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artwork" component={Artwork} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/coding" component={Coding} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
