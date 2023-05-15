import { createBrowserRouter } from "react-router-dom";
import { Main } from "@/layout";
import { Checkout, Home, Login, Signup, Notfound, Cart } from "@/pages";
import User from "./User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Notfound />,
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
        element: (
          <User>
            <Checkout />,
          </User>
        ),
        loader: ({ params }) =>
          fetch(
            `https://api-car-doctor.vercel.app/api/v1/services/${params.id}`
          ),
      },
      {
        path: "my cart",
        element: (
          <User>
            <Cart />
          </User>
        ),
      },
    ],
  },
]);

export default router;
