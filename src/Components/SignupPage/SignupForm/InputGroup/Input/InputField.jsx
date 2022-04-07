import React from "react";
import '../Input/InputField.css'

export const InputField = ({ type, name, value }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className="form-control "
        value={value}
        id={name}
        required
      />
    </>
  );
};
