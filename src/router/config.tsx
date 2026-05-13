import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Admin from "../pages/admin/page";
import LoginPage from "../pages/auth/LoginPage";
import BookingPage from "../pages/auth/BookingPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/dang-nhap",
    element: <LoginPage />,
  },
  {
    path: "/dat-lich",
    element: <BookingPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;