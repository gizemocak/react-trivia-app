import React, { Component } from "react";
import "./Home.css";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <h1 className="header">Trivia</h1>
          <div className="container">
            <p>You will be presented with 10 True or False Questions.</p>
            <p class>Can you score 100%?</p>
          </div>
        </section>
        <button className="button" onClick={this.props.getQuestions}>
          BEGIN
        </button>
      </div>
    );
  }
}

export default App;
