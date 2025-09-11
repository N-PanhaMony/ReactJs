// ✅ Remember to install and import PropTypes for type-checking props
// npm install prop-types
import PropTypes from "prop-types";

function User(props) {
  const welcome = (
    <h3 style={{ backgroundColor: "Green", padding: "20px", borderRadius: "10px" }}>
      welcome {props.username}
    </h3>
  );

  const pls = (
    <h3 style={{ backgroundColor: "red", padding: "20px", borderRadius: "10px" }}>
      Please log in
    </h3>
  );

  // ✅ If isloggedIn is true → show welcome, else → show "Please log in"
  return props.isloggedIn ? welcome : pls;
}

// ✅ Define expected prop types for clarity & safety
User.propTypes = {
  username: PropTypes.string,      // username should be a string
  isloggedIn: PropTypes.bool.isRequired, // must be true/false
};

export default User;
