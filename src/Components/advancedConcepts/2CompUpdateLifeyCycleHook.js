import React, { Component } from "react";

export default class CompUpdateLifeyCycleHook extends Component {
  constructor(props) {
    super(props);
    this.state = { key: "initial State" };
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    // in update flow, it gets the updated/latest prop and state
    // sync your state with any new changes to props if required
    console.log("getDerivedStateFromProps", nextProps, nextState);
    // must return UpdatedState
    return nextState;
  }

  shouldComponentUpdate(newProps, newState) {
    //new prop and new state: must return boolean
    console.log("shouldComponentUpdate", newProps, newState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // old prop or old state whichever is getting updated
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    // must return something or null: returned value will
    // be 3rd param in componentDidU[date]
    return -1;
  }
  componentDidMount() {
    console.log("componentDidMount", this.props, this.state);
  }
  componentDidUpdate(oldprops, oldstate, snapshot) {
    console.log("snapshot", oldprops, oldstate, snapshot);
    //old values for state and props received as param
    //however accessing via this.props/state gives latest values
    console.log("componentDidUpdate", this.props, this.state);
  }

  render() {
    console.log("render");
    return (
      <button onClick={() => this.setState({ key: "newValue" })}>
        UpdateState
      </button>
    );
  }
}
// export default CompUpdateLifeyCycleHook;

// output

// getDerivedStateFromProps : initial flow, so gets initial state and prop
// Object {test: "prop"}
// Object {test: "initial State"}

// component did mount
// Object {test: "initial State"}
