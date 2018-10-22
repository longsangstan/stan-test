import * as React from "react";

import { RadioGroup } from "evergreen-ui";

interface IQuestionProps {
  text: string;
  choices: string[];
  currentChoice: string;
  index: number;
  onChoiceChange: (index: number, newChoice: string) => void;
}

interface IRadioGroupOption {
  label: string;
  value: string;
}

function mapChoicesToRadioGroupOptions(choices: string[]): IRadioGroupOption[] {
  return choices.map((value, index) => {
    return { label: value, value: index.toString() };
  });
}

class Question extends React.Component<IQuestionProps> {
  handleChoiceChange = (value: string) => {
    this.props.onChoiceChange(this.props.index, value);
  };

  render() {
    const { index, text, currentChoice, choices } = this.props;

    return (
      <div>
        <p>{`${index + 1}. ${text}`}</p>
        <RadioGroup
          size={16}
          // label={`${index + 1}. ${text}`}
          value={currentChoice}
          options={mapChoicesToRadioGroupOptions(choices)}
          onChange={this.handleChoiceChange}
        />
      </div>
    );
  }
}

export default Question;
