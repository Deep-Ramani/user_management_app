import React from "react";
import './InputGroup.css'
import { ErrorMessage, useField } from 'formik';

export const InputGroup = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
    <div className="mb-3">
      <label htmlFor={field.name} className="form-label">{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
















      {/* <div className="container">
        <div className="mb-2">
          <div className="form-label">
            <Label name={name} label={label} />
          </div>
          <div>
            <InputField type={type} name={name} value={value} />
          </div>
        </div>
      </div>
 */}















    </>
  );
};
