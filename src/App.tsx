import * as React from "react";
import "./App.css";

import { Button } from "evergreen-ui";

import Question from "./Question";

import calculateScore from "./calculateScore";
import makeResultString from "./makeResultString";
import quiz from "./quiz";

class App extends React.Component {
  state = {
    currentChoices: quiz.questions.map(() => "0"),
    resultString: "",
    score: 0,
    submitted: false
  };

  handleChoiceChange = (index: number, newChoice: string) => {
    const newChoices = [...this.state.currentChoices];

    newChoices[index] = newChoice;

    this.setState({
      currentChoices: newChoices
    });
  };

  handleButtonClick = () => {
    this.setState({
      currentChoices: quiz.questions.map(() => "0"),
      resultString: makeResultString(
        quiz,
        this.state.currentChoices.map(item => parseInt(item, 10))
      ),
      score: calculateScore(
        quiz,
        this.state.currentChoices.map(item => parseInt(item, 10))
      ),
      submitted: !this.state.submitted
    });
  };

  renderQuestionsView = () => {
    return (
      <div>
        {quiz.questions.map((item, index) => (
          <div key={index} style={{ marginBottom: 15 }}>
            <Question
              {...item}
              currentChoice={this.state.currentChoices[index]}
              index={index}
              onChoiceChange={this.handleChoiceChange}
            />
          </div>
        ))}
      </div>
    );
  };

  renderResultView = () => {
    return (
      <div>
        <h1>{`Your Stan Score is ${this.state.score}/100!`}</h1>
        <p>{this.state.resultString}</p>
        <h2>{`What does it mean? Absolutely nothing.`}</h2>
      </div>
    );
  };

  render() {
    const { submitted } = this.state;

    return (
      <div className="App">
        {submitted ? null : (
          <h2 className="App-intro">Can you stan the test?</h2>
        )}
        {submitted ? this.renderResultView() : this.renderQuestionsView()}
        <Button onClick={this.handleButtonClick}>
          {submitted ? "Do It Again" : "Submit"}
        </Button>
      </div>
    );
  }
}

export default App;
