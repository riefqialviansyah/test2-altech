import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LayoutPage from "./pages/layout/LayoutPage";
import LoginPage from "./pages/Login/Loginpage";

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
    element: <LoginPage />,
  },
]);

export default router;
