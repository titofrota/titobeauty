import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Header from"./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
