import React from "react";
import "./styles.css";
import CompUpdateLifeCycleHook from './Components/advancedConcepts/2CompUpdateLifeyCycleHook'

export default class App extends React.Component {
  state = {n:10};
  componentDidUpdate(){
    console.log(this.state);
  }
  render(){
    return (
      <div className="App">
      <button onClick={()=> this.setState({n:100})}>I am an app button</button>
        <CompUpdateLifeCycleHook test={this.state.n}/> 
     </div>
    );
  }
}
