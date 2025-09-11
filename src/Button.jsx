// Button.jsx
function Button() {
  const handleClick = (name) => {
    console.log(`Hello, ${name}`);
  };

  return (
    <>
      <button onClick={() => handleClick("Alice")}>Say Hi to Alice</button>
      <button onClick={() => handleClick("Bob")}>Say Hi to Bob</button>
    </>
  );
}

export default Button;
