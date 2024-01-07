import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRoute from "./MainRoute.jsx";
import { ToastContainer } from "react-toastify";
import AuthanticationProvider from "./providers/authProvider/AuthanticationProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthanticationProvider> 
    <RouterProvider router={MainRoute} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </AuthanticationProvider>
  </React.StrictMode>
);
