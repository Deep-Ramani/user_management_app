import HomePage from "../pages/HomePage"
import SignupPage from "../pages/SignupPage";

const routes = {
  signupPage: {
    id: "signup",
    name: "Signup",
    description: "Signup page",
    path: "/signupPage",
    isPrivate: false,
    element: <SignupPage />,
  },
  homePage: {
    id: "home",
    name: "Home",
    description: "Home page",
    path: "/homePage",
    isPrivate: true,
    element: <HomePage />,
  },
};

export default routes;