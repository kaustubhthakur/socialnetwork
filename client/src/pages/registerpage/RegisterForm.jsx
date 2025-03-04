import { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";
import "./RegisterForm.css"
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const setUser = useSetRecoilState(userAtom);
  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:9000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();

      if (data.error) {
        alert(data.error);
        return;
      }

      localStorage.setItem("users", JSON.stringify(data));
      setUser(data);
      alert("registered");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Sign up</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            value={inputs.username}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            value={inputs.email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              value={inputs.password}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button className="signup-btn" onClick={handleSignup}>
          Sign up
        </button>
        <p>
          Already a user?{" "}
          <span className="login-link" onClick={() => setAuthScreen("login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
