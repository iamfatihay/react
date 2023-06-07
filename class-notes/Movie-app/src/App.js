import React from "react";
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import Router from "./router/Router";

const App = () => {
  return (
    <div className="dark:bg-[#23242a]">
      <AuthContext>
        <Router />
        <ToastContainer />
      </AuthContext>
    </div>
  );
};

export default App;
