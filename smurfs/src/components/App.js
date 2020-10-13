import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf, getSmurf } from "../actions/main";

import "./App.css";

class App extends Component {
  state = {
    name: "",
    age: "",
    height: "",
  };

  componentDidMount() {
    this.props.getSmurf();
  }

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submit = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <br />
        <form onSubmit={this.submit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.change}
            placeholder="NAME"
            name="name"
          />
          <br />
          <input
            type="text"
            value={this.state.age}
            onChange={this.change}
            placeholder="AGE"
            name="age"
          />
          <br />
          <input
            type="text"
            value={this.state.height}
            onChange={this.change}
            placeholder="HEIGHT"
            name="height"
          />
          <button>ENTER</button>
        </form>
        <br />
        {this.props.smurfs.map((e) => {
          return (
            <div key={e.id}>
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
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { addSmurf, getSmurf })(App);
