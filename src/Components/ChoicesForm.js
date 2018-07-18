import React, { Component } from "react";

class ChoicesForm extends Component {
  state = {
    content: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submit");
    this.postChoices(this.state.content);
    this.setState({
      content: ""
    });
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // postQuestion = (contentText, answerText) => {
  //   let options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       content: contentText,
  //       answer: answerText,
  //       assignment_id: this.props.id
  //     })
  //   };
  //   fetch("http://localhost:3000/questions", options)
  //     .then(resp => resp.json())
  //     .then(json => console.log(json));
  // };

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
    fetch("http://localhost:3000/choices", options)
      .then(resp => resp.json())
      .then(json => console.log(json));
  };

  render() {
    // console.log(this.props.id);
    return (
      <div className="col-lg-4">
        <form onSubmit={this.handleSubmit}>
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
    );
  }
}

export default ChoicesForm;
