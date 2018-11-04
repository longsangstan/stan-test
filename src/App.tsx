import * as React from "react";
import "./App.css";

import { Button } from "evergreen-ui";

import Question from "./Question";

import calculateScore from "./calculateScore";
import makeResultComment from "./makeResultComment";
import makeResultString from "./makeResultString";
import quiz from "./quiz";

class App extends React.Component {
  state = {
    currentChoices: quiz.questions.map(() => ""),
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
      currentChoices: quiz.questions.map(() => ""),
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
        <h2>{makeResultComment(this.state.score)}</h2>
        <h3>
          <a
            style={{
              color: "#636e72",
              fontWeight: "bold",
              textDecoration: "underline"
            }}
            href="https://medium.com/@longsangstan/the-stan-test-can-you-stan-the-test-97a6a1f358e5"
            target="_blank"
          >
            Learn more about the test here!
          </a>
        </h3>
      </div>
    );
  };

  render() {
    const { submitted, currentChoices } = this.state;

    return (
      <div className="App">
        {submitted ? null : (
          <h2 className="App-intro">Can you stan the test?</h2>
        )}
        {submitted ? this.renderResultView() : this.renderQuestionsView()}
        <Button
          onClick={this.handleButtonClick}
          disabled={currentChoices.includes("") && !submitted}
        >
          {submitted ? "Do It Again" : "Submit"}
        </Button>
        <div style={{ margin: 10 }}>
          <a
            style={{ fontWeight: "bold" }}
            href="https://clss.hk/?utm_source=test"
            target="_blank"
          >
            ⚡Powered by CLSS.hk
          </a>
        </div>
      </div>
    );
  }
}

export default App;
