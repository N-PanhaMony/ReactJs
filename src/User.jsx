import PropTypes from "prop-types";

function User(props){

const welcome = <h3 style={{ backgroundColor: "Green", padding: "20px", borderRadius: "10px" }}>welcome {props.username} </h3>

const pls = <h3 style={{ backgroundColor: "red", padding: "20px", borderRadius: "10px" }}>Please log in</h3>


return (props.isloggedIn ? welcome :pls);
}
export default User;