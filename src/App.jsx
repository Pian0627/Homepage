
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    alert("Sign Up successful!");
  }

  function handleLogin(e) {
    e.preventDefault();
    alert("Login successful!");
  }

  // home
if (page === "home") {
  return (
    <div className="page">

      <div className="navbar">
        <p className="logo">Logo</p>

        <ul>
          <li>
            <button onClick={() => setPage("home")}>Home</button>
          </li>

          <li>
            <button>Contact</button>
          </li>

          <li>
            <button >About</button>
          </li>
        </ul>
      </div>

      <div className="home-content">
        <h1>Welcome to Home Page</h1>

        <p>
          Create an account to get started, or log in if you already have an account.
        </p>

        <div className="home-buttons">
          <button onClick={() => setPage("signup")}>
            Sign Up
          </button>

          <button
            className="secondary-button"
            onClick={() => setPage("login")}
          >
            Login
          </button>
        </div>
      </div>

    </div>
  );
}

  // sign up
  if (page === "signup") {
    return (
      <div className="page">
        <div className="form-card">
          <h2>Create Account</h2>

          <p>Create a new account.</p>

          <form onSubmit={handleSignup}>
            <label>Full Name</label>

            <input
              type="text"
      placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
           value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

           <button type="submit">
              Sign Up
            </button>
          </form>

          <p className="switch-text">
            Already have an account?{" "}
            <span onClick={() => setPage("login")}>
              Login
            </span>
          </p>

       <button
            className="back-button"
            onClick={() => setPage("home")}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Login
  return (
    <div className="page">
      <div className="form-card">
        <h2>Welcome Back</h2>

        <p>Login to your existed account.</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p className="switch-text">
          Don't have an account?{" "}
          <span onClick={() => setPage("signup")}>
            Sign Up
          </span>
        </p>

        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default App;
