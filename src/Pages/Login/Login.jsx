import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%" }} className='login-page'>
      <form className='login-container'>
        <div className="login-title">
          <h2>{currState}</h2>
          <button className="back-btn" onClick={() => navigate("/")}>← Back</button>
        </div>

        <div className="login-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder='Your name' required />
          )}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>

        <button className="submit-btn">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default Login;
