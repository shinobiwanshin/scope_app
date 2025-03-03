// import "./App.css";
import LoginSignup from "./components/Login-Signup/LoginSignup";
import SocialLogin from "./components/SocialLogin";
import InputField from "./components/InputField";
import { FrappeProvider } from "frappe-react-sdk";
import "@radix-ui/themes/styles.css";

function App() {
  const getSiteName = () => {
    if (
      window.frappe?.boot?.versions?.frappe &&
      (window.frappe.boot.versions.frappe.startsWith("15") ||
        window.frappe.boot.versions.frappe.startsWith("16"))
    ) {
      return window.frappe?.boot?.sitename ?? import.meta.env.VITE_SITE_NAME;
    }
    return import.meta.env.VITE_SITE_NAME;
  };
  return (
    <>
      <FrappeProvider
        socketPort={import.meta.env.VITE_SOCKET_PORT}
        siteName={getSiteName()}
      >
        {/* <LoginSignup /> */}
        <div className="login-container">
          <h2 className="form-title">Log in with</h2>
          <SocialLogin />
          <p className="separator">
            <span>or</span>
          </p>
          <form action="#" className="login-form">
            <InputField type="email" placeholder="Email address" icon="mail" />
            <InputField type="password" placeholder="Password" icon="lock" />
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
      </FrappeProvider>
    </>
  );
}

export default App;
