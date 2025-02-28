import { useState } from "react";
import "./App.css";
import LoginSignup from "./components/Login-Signup/LoginSignup";
import { FrappeProvider } from "frappe-react-sdk";
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
        // socketPort={import.meta.env.VITE_SOCKET_PORT}
        siteName={getSiteName()}
      >
        <LoginSignup />
      </FrappeProvider>
    </>
  );
}

export default App;
