import React, { Component } from "react";
import "./App.css";
import Aux from "./hoc/_Aux/_Aux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import UpperMediaSection from "./components/UpperMediaSection/UpperMediaSection";

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <UpperMediaSection />
        <Main />
      </Aux>
    );
  }
}

export default App;
