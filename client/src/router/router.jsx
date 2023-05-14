import { createBrowserRouter } from "react-router-dom";
import { Main } from "@/layout";
import { Home, Signup } from "@/pages";

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
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
