import React, { Component } from "react";
import QuestionForm from "./QuestionForm";

class EachAssignment extends Component {
  state = {
    questions: [],
    correct: null
  };

  componentDidMount() {
    fetch(`http://localhost:3000/questions`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          questions: json
        });
      });
  }

  checkAnswer = event => {
    let questionId = Number(event.target.parentElement.id);
    let questionAsked = this.state.questions.find(function(question) {
      return question.id === questionId;
    });
    if (questionAsked.answer === event.target.innerText) {
      this.setState({
        correct: true
      });
    } else {
      this.setState({
        correct: false
      });
    }

    console.log(questionAsked.answer);
    console.log(event.target.innerText);
    console.log(questionAsked.answer === event.target.innerText);

    // console.log(this.state, event.target.innerText); content of selected answered clicked
    // if event.target.innerText ==
    // console.log(event.target.parentElement.id); id of question
  };

  render() {
    // console.log("each assignment", this.props.match.params.id);

    const questions = this.state.questions;
    const filteredQuestions = questions.filter(question => {
      return this.props.match.params.id === question.assignment_id;
    });

    const assignmentQuestions = filteredQuestions.map(question => {
      // console.log(question.answer);
      let choicesArr = question.choices.map(choice => {
        console.log(question.answer);
        let c = choice.content.split(",");
        return (
          <div id={choice.id}>
            <p onClick={this.checkAnswer}>{c[0]}</p>
            <p onClick={this.checkAnswer}>{c[1]}</p>
            <p onClick={this.checkAnswer}>{c[2]}</p>
            <p onClick={this.checkAnswer}>{c[3]}</p>
          </div>
        );
      });

      return (
        <div>
          <h1>{question.content}</h1>
          {choicesArr}
        </div>
      );
    });
    // console.log(this.props.match.params.id);

    return (
      <div>
        <div className="check">
          <img
            alt="#"
            src={this.state.correct ? "/checks.jpg" : "/Red_x.png"}
          />
        </div>
        <ul>{assignmentQuestions}</ul>
        <div>
          <QuestionForm id={this.props.match.params.id} />
        </div>
      </div>
    );
    //   const questions = this.state.assignment.questions.map(question => {
    //     return <p>{question.content}</p>;
    //   });
    //   return <div>{questions}</div>;
  }
}

export default EachAssignment;
