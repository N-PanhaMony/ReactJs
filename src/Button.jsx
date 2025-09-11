// Button.jsx
function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
    alert("You clicked the button 🚀");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default Button;
