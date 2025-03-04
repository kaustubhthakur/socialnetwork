import { useState } from "react";
import { useSetRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";
import "./LoginForm.css"
export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const setUser = useSetRecoilState(userAtom);
	const [loading, setLoading] = useState(false);

	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const handleLogin = async () => {
		setLoading(true);
		try {
			const res = await fetch("http:///localhost:9000/auth/login", {
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
      alert('loggedin')
			setUser(data);
			alert("Login Successful");
		} catch (error) {
			alert("Login Failed");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="login-container">
			<div className="login-box">
				<h2>Login</h2>
				<div className="form-group">
					<label>Username</label>
					<input
						type="text"
						value={inputs.username}
						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
					/>
				</div>
				<div className="form-group">
					<label>Password</label>
					<div className="password-input">
						<input
							type={showPassword ? "text" : "password"}
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
						<button type="button" onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? "Hide" : "Show"}
						</button>
					</div>
				</div>
				<button className="login-btn" onClick={handleLogin} disabled={loading}>
					{loading ? "Logging in..." : "Login"}
				</button>
				<p>
					Don't have an account?{" "}
					<span className="signup-link" onClick={() => alert("Go to Signup Page")}>
						Sign up
					</span>
				</p>
			</div>
		</div>
	);
}
