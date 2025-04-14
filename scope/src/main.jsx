import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FrappeProvider } from "frappe-react-sdk";
import { BrowserRouter } from "react-router-dom";
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

createRoot(document.getElementById("root")).render(
  <FrappeProvider
    socketPort={import.meta.env.VITE_SOCKET_PORT}
    siteName={getSiteName()}
  >
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </FrappeProvider>
);
