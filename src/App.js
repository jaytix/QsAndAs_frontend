import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import AssignmentContainer from "./AssignmentContainer";
import EachAssignment from "./Components/EachAssignment";

class App extends Component {
  constructor() {
    super();
    this.state = {
      assignments: []
    };
  }

  fetchData = () => {
    fetch("http://localhost:3000/assignments")
      .then(res => res.json())
      .then(assignments => this.handleResponse(assignments));
  };

  handleResponse = assignments => {
    this.setState({
      assignments: assignments
    });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    return (
      <div>
        <div className="App">
          <Header />
        </div>
        <Switch>
          <Route
            exact
            path="/assignments"
            render={routerProps => {
              return (
                <AssignmentContainer
                  {...routerProps}
                  assignments={this.state.assignments}
                />
              );
            }}
          />
          <Route path="/assignments/:id" component={EachAssignment} />
        </Switch>
      </div>
    );
  }
}

export default App;
