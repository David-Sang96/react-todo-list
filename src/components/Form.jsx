/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Form = ({ handleAdd }) => {
  const [userData, setUserData] = useState("");

  return (
    <div>
      <h2 className="mb-4">React Todo List Project</h2>
      <div className="row ">
        <div className="col-md-6 mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Tasks.."
            value={userData}
            onChange={(e) => setUserData(e.target.value)}
          />
        </div>
        <div className="col-6">
          <button
            className="btn btn-primary mb-3"
            onClick={() => {
              handleAdd(userData);
              setUserData("");
            }}
          >
            <i className="fa-solid fa-square-plus mx-1"></i>Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
