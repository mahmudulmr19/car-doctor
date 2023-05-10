import { createBrowserRouter } from "react-router-dom";
import { Main } from "@/layout";
import { Home } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
