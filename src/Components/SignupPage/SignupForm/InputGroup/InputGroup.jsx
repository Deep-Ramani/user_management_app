import React from "react";
import "./InputGroup.css";
import { ErrorMessage, useField } from "formik";

export const InputGroup = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="inputGroup">
      <label htmlFor={field.name} className="form-label">
        {label}
      </label>
      <input
        className={`form-control  ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
