import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LayoutPage from "./pages/layout/LayoutPage";

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
]);

export default router;
