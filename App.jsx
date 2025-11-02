import React from "react";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header />
      <FeedbackForm />
      <Card
        name="Aman Kumar"
        course="React Basics"
        feedback="Great learning experience!"
      />
    </div>
  );
}

export default App;
