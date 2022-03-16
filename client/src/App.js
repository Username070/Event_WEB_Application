import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/public/Main";
import Events from "./pages/public/AllEvents";
import About from "./pages/public/About";
import Contacts from "./pages/public/Contacts";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </Router>
          
      </>
    )
  }
}

export default App;