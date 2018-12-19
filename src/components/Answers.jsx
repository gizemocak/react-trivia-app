import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  componentDidMount() {
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
  }

  render() {
    return (
      <div>
        <h1>Answers</h1>
        <div>{this.state.score}</div>
        {this.props.questions.map(question =>
          question.user_answer === question.correct_answer ? (
            <div>+{question.question}</div>
          ) : (
            <div>-{question.question}</div>
          )
        )}
      </div>
    );
  }
}

export default App;
