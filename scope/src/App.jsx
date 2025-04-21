import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import InputField from "./components/InputField";
import { useFrappeAuth } from "frappe-react-sdk";
import Dashboard from "./Dashboard";

function App() {
  const { currentUser, login, logout } = useFrappeAuth(); // Added logout
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  // Dynamically add/remove the "login-page" class to <body>
  useEffect(() => {
    if (!currentUser) {
      document.body.classList.add("login-page");
    } else {
      document.body.classList.remove("login-page");
    }
    setIsLoading(false); // Authentication check is complete
    return () => {
      document.body.classList.remove("login-page");
    };
  }, [currentUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous error messages

    try {
      const response = await login({
        username: username,
        password: password,
      });
      console.log("Login response:", response);
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid username or password. Please try again."); // Set error message
    }
  };

  const handleLogout = () => {
    logout(); // Log the user out
  };

  if (isLoading) {
    // Show a loading spinner or placeholder while checking authentication
    return <div>Loading...</div>;
  }

  const LoginPage = () => (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />
      <p className="separator">
        <span>or</span>
      </p>
      <form action="#" className="login-form" onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Email address"
          icon="mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message */}
        <a href="#" className="forgot-password-link">
          Forgot password?
        </a>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      <p className="signup-prompt">
        Don&apos;t have an account?{" "}
        <a href="#" className="signup-link">
          Sign up
        </a>
      </p>
    </div>
  );

  return (
    <Routes>
      {/* Redirect / to the login page */}
      <Route
        path="/"
        element={currentUser ? <Navigate to="/overview" /> : <LoginPage />}
      />
      {/* Dashboard route */}
      <Route
        path="/*"
        element={currentUser ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
