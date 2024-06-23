import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
        <h1>Name</h1>
        <form className="login">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <Link className="playbtn" to="/dashboard">Play</Link>
        </form>
        </div>
    );
    };

export default Login;