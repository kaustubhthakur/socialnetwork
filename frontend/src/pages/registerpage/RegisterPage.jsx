import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../../atoms/authAtom";
import useShowToast from "../../hooks/useShowToast";
import userAtom from "../../atoms/userAtom";
import './RegisterPage.css'
export default function RetroRegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const setAuthScreen = useSetRecoilState(authScreenAtom);
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const showToast = useShowToast();
    const setUser = useSetRecoilState(userAtom);

    const handleSignup = async () => {
        try {
            const res = await fetch("https://localhost:9000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs),
            });
            const data = await res.json();

            if (data.error) {
                showToast("Error", data.error, "error");
                return;
            }
            alert('registered user');
            localStorage.setItem("users", JSON.stringify(data));
            setUser(data);
        } catch (error) {
            showToast("Error", error, "error");
        }
    };

    const retroStyles = {
        container: {
            fontFamily: "'VT323', monospace", // Retro computer font
            backgroundColor: '#000',
            color: '#0F0', // Classic green text
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: 0,
            padding: 0,
        },
        formContainer: {
            border: '2px solid #0F0',
            padding: '20px',
            backgroundColor: '#111',
            boxShadow: '0 0 10px #0F0, inset 0 0 10px #0F0', // Glowing effect
            width: '300px',
            borderRadius: '5px',
        },
        input: {
            width: '100%',
            backgroundColor: '#000',
            color: '#0F0',
            border: '1px solid #0F0',
            padding: '8px',
            marginTop: '5px',
            fontFamily: "'VT323', monospace",
        },
        button: {
            width: '100%',
            backgroundColor: '#0F0',
            color: '#000',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            fontFamily: "'VT323', monospace",
            fontSize: '16px',
            marginTop: '10px',
            transition: 'all 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#0A0',
        },
        link: {
            color: '#0F0',
            textDecoration: 'underline',
            cursor: 'pointer',
        },
        header: {
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
        }
    };

    return (
        <div style={retroStyles.container}>
            <div style={retroStyles.formContainer}>
                <h2 style={retroStyles.header}>Register</h2>
                <div style={{ marginBottom: '10px' }}>
                    <label>Username</label>
                    <input
                        type='text'
                        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        value={inputs.username}
                        style={retroStyles.input}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email address</label>
                    <input
                        type='email'
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        value={inputs.email}
                        style={retroStyles.input}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        value={inputs.password}
                        style={retroStyles.input}
                    />
                    <button 
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            ...retroStyles.button,
                            marginTop: '5px',
                            width: 'auto',
                            padding: '5px 10px',
                        }}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <button 
                    onClick={handleSignup} 
                    style={retroStyles.button}
                    onMouseEnter={(e) => e.target.style.backgroundColor = retroStyles.buttonHover.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = retroStyles.button.backgroundColor}
                >
                    Register
                </button>
                <p style={{ textAlign: 'center', marginTop: '10px' }}>
                    Already a user? {' '}
                    <span 
                        style={retroStyles.link} 
                        onClick={() => setAuthScreen("login")}
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}