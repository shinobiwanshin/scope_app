import { useState } from "react";
import "./App.css";
import LoginSignup from "./components/Login-Signup/LoginSignup";
import { FrappeProvider } from "frappe-react-sdk";
function App() {
  return (
    <>
      <LoginSignup />
    </>
  );
}

export default App;
