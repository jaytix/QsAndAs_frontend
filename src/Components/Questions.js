import React from "react";

export default class Assignment extends React.Component {
  state = {
    clicked: false
  };

  handleClick = e => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  allQuestions = () => {
    let questions = this.props.assignment.questions;
    return questions.map((question, index) => {
      return <div key={index}>{question.content}</div>;
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="picContainer">
          <img alt="#" src="./checks.jpg" />
        </div>
        <div>
          <div onClick={this.handleClick} id={this.props.assignment.id}>
            {this.props.assignment.name}
          </div>
          {this.state.clicked ? this.allQuestions() : null}
        </div>
      </div>
    );
  }
}
