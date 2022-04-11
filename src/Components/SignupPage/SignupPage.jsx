import React from "react";
import { SignUpForm } from "./SignupForm/SignUpForm";
import { Image } from "./Image/Image";
import "../SignupPage/SignupPage.css";
export const SignupPage = () => {
  return (
    <>
      <div className="container row " style={{ width: "992px" }}>
        <div className="col">
          <SignUpForm />
        </div>
        <div className="col d-none d-md-block sideImage">
          <Image />
        </div>
      </div>
    </>
  );
};
