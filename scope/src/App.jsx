import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import InputField from "./components/InputField";
import { useFrappeAuth } from "frappe-react-sdk";
// import Sidebar from "../src/components/common/Sidebar";
// import { Route, Routes } from "react-router-dom";
// import OverviewPage from "./pages/OverviewPage";
// import ProductsPage from "./pages/ProductsPage";
// import UsersPage from "./pages/UsersPage";
// import SalesPage from "./pages/SalesPage";
// import OrdersPage from "./pages/OrdersPage";
// import AnalyticsPage from "./pages/AnalyticsPage";
// import SettingsPage from "./pages/SettingsPage";

function App() {
  const { currentUser, login, logout } = useFrappeAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      username: username,
      password: password,
    }).then((response) => {
      console.log("Login response:", response);
      navigate("/overview");
    });
  };

  // const getSiteName = () => {
  //   if (
  //     window.frappe?.boot?.versions?.frappe &&
  //     (window.frappe.boot.versions.frappe.startsWith("15") ||
  //       window.frappe.boot.versions.frappe.startsWith("16"))
  //   ) {
  //     return window.frappe?.boot?.sitename ?? import.meta.env.VITE_SITE_NAME;
  //   }
  //   return import.meta.env.VITE_SITE_NAME;
  // };
  // return (
  //   <div className="tailwind-enabled flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
  //     {/* BG */}
  //     <div className="fixed inset-0 z-0">
  //       <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-80" />
  //       <div className="absolute inset-0 backdrop-blur-sm" />
  //     </div>

  //     <Sidebar />
  //     <Routes>
  //       <Route path="/overview" element={<OverviewPage />} />
  //       <Route path="/products" element={<ProductsPage />} />
  //       <Route path="/users" element={<UsersPage />} />
  //       <Route path="/sales" element={<SalesPage />} />
  //       <Route path="/orders" element={<OrdersPage />} />
  //       <Route path="/analytics" element={<AnalyticsPage />} />
  //       <Route path="/settings" element={<SettingsPage />} />
  //     </Routes>
  //   </div>
  // );
  return (
    <>
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
    </>
  );
}

export default App;
