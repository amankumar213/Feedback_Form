import React from "react";

function Card({ name, course, feedback }) {
  return (
    <div className="card">
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Course:</strong> {course}
      </p>
      <p>
        <strong>Feedback:</strong> {feedback}
      </p>
    </div>
  );
}

export default Card;
