import React, { Component } from "react";

class QuestionForm extends Component {
  state = {
    content: "",
    answer: "",
    choices: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.postQuestion(this.state.content, this.state.answer);
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  postQuestion = (contentText, answerText) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        content: contentText,
        answer: answerText,
        assignment_id: this.props.id
      })
    };
    fetch("http://localhost:3000/questions", options)
      .then(resp => resp.json())
      .then(json => this.postChoices(this.state.choices, json.id));
  };

  postChoices = (choiceText, questionId) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        content: choiceText,
        question_id: questionId
      })
    };
    console.log(this.state.choices);
    fetch("http://localhost:3000/choices", options).then(
      this.setState({
        content: "",
        answer: "",
        choices: ""
      })
    );
  };

  render() {
    // console.log(this.props.id);
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                onChange={this.handleInputChange}
                className="form-control"
                type="text"
                name="content"
                placeholder="question"
              />
            </div>
            <div className="form-group">
              <input
                onChange={this.handleInputChange}
                className="form-control"
                type="text"
                name="answer"
                placeholder="answer"
              />
            </div>
            <div className="form-group">
              <input
                onChange={this.handleInputChange}
                className="form-control"
                type="text"
                name="choices"
                placeholder="choices"
              />
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Create Question"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default QuestionForm;
