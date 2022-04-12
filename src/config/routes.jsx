import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";

const routes = {
  signupPage: {
    id: "signup",
    name: "Signup",
    path: "/signupPage",
    isPrivate: false,
    element: <SignupPage />,
  },
  homePage: {
    id: "home",
    name: "Home",
    path: "/homePage",
    isPrivate: true,
    element: <HomePage />,
  },
};

export default routes;
