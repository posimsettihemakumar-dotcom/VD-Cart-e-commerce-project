import { useState } from "react";
import axios from "axios";
import "../css/auth.css";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/login/",
          {
            username: formData.username,
            password: formData.password,
          }
        );

        localStorage.setItem("token", res.data.access);
        "user",
        JSON.stringify({
          username:formData.username,
          email:formData.email||"No Available",
        })
        alert("Login Successful");
        navigate("/")
      } else {
        await axios.post(
          "http://127.0.0.1:8000/api/register/",
          formData
        );
        localStorage.setItem(
          "user",
          JSON.stringify({
            username:formData.username,
            email:formData.email,
          })
        )

        alert("Registration Successful");
        setIsLogin(true);
      }
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />

        {!isLogin && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">
          {isLogin ? "Login" : "Register"}
        </button>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
}

export default Auth;