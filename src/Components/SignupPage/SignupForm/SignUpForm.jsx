import React from "react";
import { Button } from "./InputGroup/Button/Button";
import { InputGroup } from "./InputGroup/InputGroup";

import "../SignupForm/SignUpForm.css";

export const SignUpForm = () => {
  return (
    <>
      <div className="h-25">
        <div>
          <span className="signup">SignUp</span>
        </div>
        <div className="selectImage">
          <div>
            <input type="file" name="image" />
          </div>
          <div>
            
          </div>
        </div>
        <div className="inputgroup">
          <InputGroup label="Name" name="name" type="text" />
          <InputGroup label="Email" name="email" type="email" />
          <InputGroup label="PhoneNo" name="phoneno" type="number" />
          <InputGroup label="Password" name="password" type="password" />
          <InputGroup label="Confirm Password" name="cpassword" type="password" />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </>
  );
};
