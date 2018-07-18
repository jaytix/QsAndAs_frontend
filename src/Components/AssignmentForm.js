import React, { Component } from "react";

class AssignmentForm extends Component {
  state = {
    name: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.postAssignment(this.state.name);
    this.setState({
      name: ""
    });
  };

  postAssignment = text => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: text
      })
    };
    fetch("http://localhost:3000/assignments", options)
      .then(resp => resp.json())
      .then(json => console.log(json));
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="col-lg-4">
        <form onSubmit={this.handleSubmit} className="form">
          <input
            onChange={this.handleInputChange}
            className="form-control"
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
          />

          <input className="btn" type="submit" value="Create Assignment" />
        </form>
      </div>
    );
  }
}

export default AssignmentForm;
