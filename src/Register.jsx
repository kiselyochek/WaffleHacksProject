import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
        <h1>Register</h1>
        <form className="login">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <Link className="registerbtn" to="/">Register</Link>
        </form>
        </div>
    );
    };

export default Register;