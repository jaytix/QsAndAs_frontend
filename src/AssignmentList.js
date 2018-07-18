import React, { Component } from "react";
import { Link } from "react-router-dom";

class AssignmentList extends Component {
  render() {
    // console.log("assigments list", this.props.assignments);
    const assignments = this.props.assignments;
    let mapAssignments = assignments.map((assignment, index) => (
      <div key={index}>
        <Link
          to={`/assignments/${assignment.id}`}
          className="collection-item"
          key={assignment.id}
        >
          <h2 className="assignmentStyle">{assignment.name}</h2>
        </Link>
      </div>
    ));

    return <div>{mapAssignments}</div>;
  }
}

export default AssignmentList;
