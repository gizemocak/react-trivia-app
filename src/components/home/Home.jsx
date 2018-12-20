import React, { Component } from "react";
import "./Home.css";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <h1>Welcome to the Trivia Challenge!</h1>
          <p>You will be presented with 10 True or False Questions.</p>
          <p>Can you score 100%?</p>
        </section>
        <footer>
          <button className="button" onClick={this.props.getQuestions}>
            BEGIN
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
