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
import Loading from "../Components/Loading";
import Contact from "../Pages/Contact";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import AboutUs from "../Pages/AboutUs";
import PrivateLayout from "../Layouts/PrivateLayout";
import ForgotPassword from "../Components/ForgotPassword";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/about-us",
        Component: AboutUs
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
  path: "/privacy-policy",
  Component: PrivacyPolicy
},{
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>
      }
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
    element: <PrivateLayout></PrivateLayout>,
    children: [
      {
        path: "",
       Component: SkillDetails,
    loader: () => fetch("/skillsData.json").then((res) => res.json()),
    hydrateFallbackElement: <Loading></Loading>,
      }
    ]
  },
  
]);
export default router;
