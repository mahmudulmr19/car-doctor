import React from "react";
import ReactDOM from "react-dom/client";
import "@/globals.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { AuthProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
