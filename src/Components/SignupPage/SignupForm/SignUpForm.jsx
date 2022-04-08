import React, { useState, useRef } from "react";
import { InputGroup } from "./InputGroup/InputGroup";
import "./SignUpForm.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export const SignUpForm = () => {
  const profileRef = useRef(null);

  const [image, setImage] = useState(null);

  const onProfileChangeHandler = (event, setFieldValue) => {
    console.log("HI");

    const profileURL = URL.createObjectURL(event.currentTarget.files[0]);

    // .setFieldValue("profile", event.currentTarget.files[0]);

    setImage(profileURL);
  };
  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="h-25">
          <h1 className="font-weight-bold .display-4 signup">SignUp</h1>

          <div className="selectImage d-none">
            {/* <div>
              <input type="file" name="image" />
            </div> */}

            <div className="profile-picture">
              <img src={image} alt="" />
            </div>
          </div>

          <Form>
            <div className="preview">
            <div className="profile-picture">
              <img src={image} alt="" />
            </div>
            <button
              type="button"
              className="add-photo"
              onClick={() => profileRef.current.click()}
            >
              Photo +
            </button>
            <input
              value={undefined}
              type="file"
              ref={profileRef}
              className="d-none"
              onChange={onProfileChangeHandler}
            />
            </div>
            <InputGroup label="Name" name="name" type="text" />
            <InputGroup label="Email" name="email" type="email" />
            <InputGroup label="password" name="password" type="password" />
            <InputGroup
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-primary mt-3 " type="submit">
              Submit
            </button>
            <button className="btn btn-danger mt-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>

    /* <div className="h-25">
        <div>
          <span className="signup">SignUp</span>
        </div>
        <div className="selectImage">
          <div>
            <input type="file" name="image" />
          </div>
        </div>
        <div className="inputgroup">
          <InputGroup label="Name" name="name" type="text" />
          <InputGroup label="Email" name="email" type="email" />
          <InputGroup label="PhoneNo" name="phoneno" type="number" />
          <InputGroup label="Password" name="password" type="password" />
          <InputGroup
            label="Confirm Password"
            name="cpassword"
            type="password"
          />
        </div>
        <div>
          <Button />
        </div>
      </div> */
  );
};
