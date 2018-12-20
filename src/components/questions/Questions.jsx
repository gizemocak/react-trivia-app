import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "./Questions.css";

class App extends Component {
  componentDidMount() {
    if (!this.props.questions.length > 0) {
      this.props.history.push("/");
    }
  }

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
        <h1
          className={`${
            Number(this.props.match.params.id) % 2 === 0
              ? "even-number"
              : "odd-number"
          }`}
        >
          {this.props.questions.length > 0 &&
            this.props.questions[id - 1].category}{" "}
        </h1>
        <div>
          {this.props.questions.length > 0 &&
            ReactHtmlParser(this.props.questions[id - 1].question)}{" "}
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
