import React from "react";
import { InputField } from "./Input/InputField";
import { Label } from "./Label/Label";

export const InputGroup = ({ name, label, type, value }) => {
  return (
    <>
      <div className="container">
        <div className="mb-2">
          <div className="form-label">
            <Label name={name} label={label} />
          </div>
          <div>
            <InputField type={type} name={name} value={value} />
          </div>
        </div>
      </div>
    </>
  );
};
