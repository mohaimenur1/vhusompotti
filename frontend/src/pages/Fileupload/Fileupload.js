import React from "react";

import Navbar from "../Dashboard/Navbar/Navbar";
import SideBar from "../Dashboard/SideBar/SideBar";
import "./Fileupload.css";

const Fileupload = () => {
  return (
    <div>
      {/* addin sidebar */}
      <Navbar />
      <SideBar />

      <div className="fileupload-form">
        <h2 className="form-text">File Upload</h2>
        <form
          className="form-main"
          //   style={{ position: "absolute", left: "50%", top: "25%" }}
        >
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Owner Name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Bivag"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Zilla"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Mouza"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Amount"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Map"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary fileupload-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fileupload;
