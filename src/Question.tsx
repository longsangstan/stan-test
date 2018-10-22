import * as React from "react";

import { Pane, Radio } from "evergreen-ui";

interface IQuestionProps {
  text: string;
  choices: string[];
  currentChoice: string;
  index: number;
  onChoiceChange: (index: number, newChoice: string) => void;
}

class Question extends React.Component<IQuestionProps> {
  handleChoiceChange = (event: any) => {
    this.props.onChoiceChange(this.props.index, event.currentTarget.value);
  };

  render() {
    const { index, text, currentChoice, choices } = this.props;

    return (
      <div>
        <p>{`${index + 1}. ${text}`}</p>

        <Pane>
          {choices.map((choice, choiceIndex) => (
            <Radio
              key={choiceIndex}
              size={16}
              label={choice}
              value={choiceIndex.toString()}
              checked={choiceIndex.toString() === currentChoice}
              onChange={this.handleChoiceChange}
            />
          ))}
        </Pane>
      </div>
    );
  }
}

export default Question;
