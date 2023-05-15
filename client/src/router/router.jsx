import { createBrowserRouter } from "react-router-dom";
import { Main } from "@/layout";
import { Checkout, Home, Login, Signup } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "checkout/:id",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
