// SimpleForm.jsx

// 🔹 About Hooks and useState()
// React Hooks are functions that let you "hook into" React features inside functional components.
// The most common hook is `useState()` which allows a component to:
// 1. Remember values between re-renders (like variables that persist when the UI updates).
// 2. Trigger React to re-render the component whenever the state changes, so the UI updates automatically.
// 3. Replace the older class-based `this.state` and `this.setState` in a simpler, cleaner way.

// Example usage:
// const [value, setValue] = useState(initialValue);
// - `value` is the current state value.
// - `setValue` is a function to update it, which also triggers re-render.
// - `initialValue` is what the state starts with.

import { useState } from "react";

function Form() {
  // 🔹 Separate state for each input field
  const [name, setName] = useState("");   // Holds the Name input value
  const [email, setEmail] = useState(""); // Holds the Email input value
  const [age, setAge] = useState("");     // Holds the Age input value

  // 🔹 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form reload

    // 🔹 Simple validation: stop if any field is empty
    if (!name || !email || !age) return;

    // 🔹 Show the collected form data
    console.log("Form Submitted:", { name, email, age });
    alert(`Submitted: ${name}, ${email}, ${age}`);

    // 🔹 Reset the input fields after submission
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name input field */}
      <input
        type="text"
        placeholder="Name"
        value={name}                // Controlled input linked to React state
        onChange={(e) => setName(e.target.value)} // Update state on typing
      />

      {/* Email input field */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Age input field */}
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      {/* Submit button */}
      <button type="submit" >
        Submit
      </button>
    </form>
  );
}

export default Form;
