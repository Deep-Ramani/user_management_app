import React from "react";
import { SignUpForm } from "./SignupForm/SignUpForm";
import { Image } from "./Image/Image";
import "../SignupPage/SignupPage.css";
export const SignupPage = () => {
  return (
    <>
      <div className="container row mt-5 " style={{ width: "1000px" }}>
        <div className="col">
          <SignUpForm />
        </div>
        <div className="col d-none d-md-block mt-5">
          <Image />
        </div>
      </div>
    </>
  );
};
