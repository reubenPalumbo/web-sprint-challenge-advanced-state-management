import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/main";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <br />
        {this.props.smurfs.map((e) => {
          return (
            <div>
              <h2>NAME: {e.name}</h2>
              <h2>AGE:{e.age}</h2>
              <h2>HEIGHT:{e.height}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { addSmurf })(App);
