import React, { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [feedback, setFeedback] = useState("");

  function handle(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Course:", course);
    console.log("Feedback:", feedback);
  }

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handle}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <br />
        <br />

        <label>
          Course:
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course"
          />
        </label>
        <br />
        <br />

        <label>
          Feedback:
          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter feedback"
          />
        </label>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
