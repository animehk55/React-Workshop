import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({
      score: this.state.score + 1
    });
    // console.log("increment");
  };

  decrement = () => {
    this.setState({
      score: this.state.score - 1
    });
    // console.log("decrement");
  };
  render() {
    return (
      <div>
        <h2>Counter Button</h2>
        <div className="row">
          <h3
            onClick={this.increment}
            style={{ fontSize: 50, margin: 20, padding: 20 }}
          >
            -
          </h3>
          <h3>{this.state.score}</h3>
          <h3
            onClick={this.decrement}
            style={{ fontSize: 50, margin: 20, padding: 20 }}
          >
            +
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
