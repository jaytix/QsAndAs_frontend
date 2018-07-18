import React, { Component } from "react";
import AssignmentList from "./AssignmentList";
import AssignmentForm from "./Components/AssignmentForm";

class AssignmentContainer extends Component {
  render = () => {
    // console.log("assignments container", this.props.assignments);
    return (
      <div className="collection">
        <ul>
          <li>
            <AssignmentList assignments={this.props.assignments} />
          </li>
        </ul>
        <div>
          <AssignmentForm />
        </div>
      </div>
    );
  };
}

export default AssignmentContainer;
