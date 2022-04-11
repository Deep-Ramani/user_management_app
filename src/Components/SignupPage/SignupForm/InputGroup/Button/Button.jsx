import React from "react";
import "../Button/Button.css";
export const Button = () => {
  return (
    <>
      <div className="button">
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
        <button type="submit" className="btn btn-danger">
          Reset
        </button>
      </div>
    </>
  );
};
