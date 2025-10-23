import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Skills from "../Components/Skills";
import PrivateRoute from "../PrivateRoute/Privateroute";
import SkillDetails from "../Pages/SkillDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/my-profile",
        Component: MyProfile,
      },
      {
        path: "/skills",
        Component: Skills,
        loader: () => fetch("/skillsData.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/skill-details/:skillId",
    element: (
      <PrivateRoute>
        <SkillDetails></SkillDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/skillsData.json").then((res) => res.json()),
    hydrateFallbackElement: <p>Loading...</p>,
  },
]);
export default router;
