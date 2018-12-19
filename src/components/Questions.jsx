import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class App extends Component {
  nextQuestion = e => {
    let id = this.props.match.params.id - 1;
    this.props.getUserAnswer(e, id);

    if (Number(this.props.match.params.id) === 10) {
      this.props.history.push("/answers");
    } else {
      this.props.history.push(
        `/questions/${parseInt(this.props.match.params.id) + 1}`
      );
    }
  };

  render() {
    let id = this.props.match.params.id;
    return (
      <div>
        <h1>Questions</h1>
        <div>
          {this.props.questions.length > 0 &&
            this.props.questions[id - 1].category}{" "}
        </div>
        <div>
          {this.props.questions.length > 0 &&
            this.props.questions[id - 1].question}{" "}
        </div>
        <div>{id} out of 10</div>
        <button onClick={this.nextQuestion} value="True">
          True
        </button>
        <button onClick={this.nextQuestion} value="False">
          False
        </button>
      </div>
    );
  }
}

export default withRouter(App);
