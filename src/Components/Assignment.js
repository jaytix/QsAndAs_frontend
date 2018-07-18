import React from "react";

export default class Assignment extends React.Component {
  state = {
    clicked: false,
    questionSelected: false
  };

  handleClick = e => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  allQuestions = () => {
    let questions = this.props.assignment.questions;
    return questions.map((question, index) => {
      let choicesArr = question.choices[0].content.split(",");
      return (
        <div key={index}>
          <h1>{question.content}</h1>
          <p>{choicesArr[0]}</p>
          <p>{choicesArr[1]}</p>
          <p>{choicesArr[2]}</p>
          <p>{choicesArr[3]}</p>
        </div>
      );
    });
  };

  showChoices = () => {
    this.setState({
      questionSelected: true
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div
          onClick={this.handleClick}
          id={this.props.assignment.id}
          className="link"
        >
          {this.props.assignment.name}
        </div>
        {this.state.clicked ? this.allQuestions() : null}
      </div>
    );
  }
}
