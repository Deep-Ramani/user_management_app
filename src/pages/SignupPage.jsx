import React from "react";
import SignUpForm from "../Components/SignupPage/SignupForm/SignUpForm";
import { Image } from "../Components/SignupPage/Image/Image";
import "../pages/SignupPage.css";
export const SignupPage = () => {
  return (
    <div className="container row " style={{ width: "992px" }}>
      <div className="col">
        <SignUpForm />
      </div>
      <div className="col d-none d-md-block sideImage">
        <Image />
      </div>
    </div>
  );
};
export default SignupPage;
