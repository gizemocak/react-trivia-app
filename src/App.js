import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Questions from "./components/questions/Questions";
import Answers from "./components/answers/Answers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  getQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ questions: resp.results }, function() {
          this.props.history.push("/questions/1");
        });
      });
  };

  getUserAnswer = (e, id) => {
    let questions = [...this.state.questions];
    questions[id].user_answer = e.target.value;
    this.setState({ questions });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} getQuestions={this.getQuestions} />
            )}
          />
          <Route
            path="/questions/:id"
            render={props => (
              <Questions
                {...props}
                questions={this.state.questions}
                getUserAnswer={this.getUserAnswer}
              />
            )}
          />
          <Route
            path="/answers"
            render={props => (
              <Answers {...props} questions={this.state.questions} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
