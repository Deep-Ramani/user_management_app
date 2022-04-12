import React, { useState, useRef } from "react";
import { InputGroup } from "./InputGroup/InputGroup";
import "./SignUpForm.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import DefaultAvatar from "../../../assets/images/avatar2.png";
import "yup-phone";
import { useDispatch } from "react-redux";
import { UserRegister } from "../../../redux/action/action";
// import { formik } from "formik";
export const SignUpForm = () => {
  // const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const profileRef = useRef(null);
  // const phoneRegExp = /^(\+91)?(-)?\s*?(91)?\s*?(\d{3})-?\s*?(\d{3})-?\s*?(\d{4})$/
  const [image, setImage] = useState(DefaultAvatar);

  // const onProfileChangeHandler = (event,setFieldValue) => {
  //   console.log("HI");

  //   const profileURL = URL.createObjectURL(event.currentTarget.files[0]);

  //   setFieldValue("profile", event.currentTarget.files[0]);

  //   setImage(profileURL);
  // };

  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Name is Required"),

    avatar: Yup.mixed()
      .required("Image must be selected")
      .test("fileSize", "File must be less than 2MB", (value) => {
        console.log(value);

        return value !== undefined && value && value.size < 2000000;
      }),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string().required("Phone No is required").phone("IN", true),
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
        avatar: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values.avatar);

        const avatarImage = URL.createObjectURL(values.avatar);
        const user = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          avatar: avatarImage,
          password: values.password,
        };
        const reader = new FileReader();

        reader.readAsDataURL(values.avatar);

        reader.onloadend = () => {
          const newuser = { ...user, avatar: reader.result };

          localStorage.setItem("userData", JSON.stringify(newuser));
        };

        dispatch(UserRegister(user));
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="">
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
              <div className="profile-picture" name="avatar">
                <img src={image} alt="" />
              </div>
              <button
                type="button"
                name="avatar"
                className="btn btn-primary profileButton"
                onClick={() => profileRef.current.click()}
              >
                Select Image
              </button>
              <Field
                value={undefined}
                type="file"
                name="avatar"
                accept=".jpg, .png"
                innerRef={profileRef}
                className="d-none"
                onChange={(event) => {
                  console.log(event);

                  if (event.currentTarget.files) {
                    const file = event.currentTarget.files[0];

                    formik.setFieldValue("avatar", file);

                    console.log(event.currentTarget.files[0]);

                    setImage(URL.createObjectURL(event.currentTarget.files[0]));
                  }
                }}
              />
              <ErrorMessage
                component="div"
                name="avatar"
                className="ImageError"
              />
            </div>

            <div className="allinputGroup">
              <InputGroup label="Name" name="name" type="text" />
              <InputGroup label="Phone No" name="phone" type="tel" />
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
            </div>
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

export default SignUpForm;
