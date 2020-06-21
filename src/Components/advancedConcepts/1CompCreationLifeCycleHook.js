import React, { Component } from "react";

class CompCreationLifeCycleHook extends Component {
  constructor(props) {
    super(props);
    this.state = { test: "initial State" };
    // console.log('constructor',props);// gets props
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    // in mounting flow, it gets initial props and state
    // however
    // in update flow, it gets the updated/latest prop and state respoectively
    console.log("getDerivedStateFromProps", nextProps, nextState);
    return nextState;
  }
  componentDidMount(prop, state) {
    console.log("component did mount",prop, state);
  }

  render() {
    // console.log('render');
    return <h1>Class Component</h1>;
  }
}
export default CompCreationLifeCycleHook;

// output

// getDerivedStateFromProps : initial flow, so gets initial state and prop
// Object {test: "prop"}
// Object {test: "initial State"}

// component did mount
// Object {test: "initial State"}
