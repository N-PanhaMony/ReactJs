import PropTypes from "prop-types";

function Props(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Position: {props.position ? "Dev" : "Stu"}</p>
    </div>
  );
}

// Type checking
Props.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  position: PropTypes.bool,
};

// Default props
Props.defaultProps = {
  name: "Guest",
  age: 0,
  position: false,
};

export default Props;
