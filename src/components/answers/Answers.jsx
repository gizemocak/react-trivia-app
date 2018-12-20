import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import "./Answers.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  componentDidMount() {
    if (!this.props.questions.length > 0) {
      this.props.history.push("/");
    }

    let score = this.state.score;
    for (let i in this.props.questions) {
      if (
        this.props.questions[i].user_answer ===
        this.props.questions[i].correct_answer
      ) {
        score++;
      }
    }
    this.setState({ score });

    //this.props.questions.filter(
    // question => question.user_answer === question.correct_answer
    // );
    //  .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }

  render() {
    return (
      <div>
        <div className="div">
          <h2>You Scored</h2>
          <h1 className="score">{this.state.score}/10</h1>
          <div className="answers">
            {this.props.questions.map(question =>
              question.user_answer === question.correct_answer ? (
                <div className="blue">
                  {ReactHtmlParser(`&#10003 ${question.question}`)}
                </div>
              ) : (
                <div className="red">
                  {ReactHtmlParser(`&#10007 ${question.question}`)}
                </div>
              )
            )}
          </div>
        </div>
        <Link className="button1" to="/">
          PLAY AGAIN?
        </Link>
      </div>
    );
  }
}

export default App;
