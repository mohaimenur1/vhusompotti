import axios from "axios";
import React, { useState } from "react";

import Navbar from "../Dashboard/Navbar/Navbar";
import SideBar from "../Dashboard/SideBar/SideBar";
import "./Fileupload.css";

const Fileupload = () => {
  const [ownerName, setOwnerName] = useState("");
  const [bivag, setBivag] = useState("");
  const [zilla, setZilla] = useState("");
  const [mouza, setMouza] = useState("");
  const [amount, setAmount] = useState("");
  const [map, setMap] = useState("");
  const [propimage, setPropImage] = useState("");

  const onChangeFile = (e) => {
    setPropImage(e.target.files[0]);
  };

  const fileFormSubmit = (e) => {
    e.preventDefault();
    console.log({ ownerName, bivag, zilla, mouza, amount, map, propimage });
  };

  const fileuploads = async () => {
    // const files = {
    //   ownerName,
    //   bivag,
    //   zilla,
    //   mouza,
    //   amount,
    //   map,
    //   propimage,
    // };
    const formData = new FormData();
    formData.append("ownerName", ownerName);
    formData.append("bivag", bivag);
    formData.append("zilla", zilla);
    formData.append("mouza", mouza);
    formData.append("amount", amount);
    formData.append("map", map);
    formData.append("image", propimage);
    try {
      const fileuploadResult = await axios.post(
        "/api/users/fileupload",
        formData
      ).data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* addin sidebar */}
      <Navbar />
      <SideBar />

      <div className="fileupload-form">
        <h2 className="form-text">File Upload</h2>
        <form
          onSubmit={fileFormSubmit}
          encType="multipart/form-data"
          className="form-main"
          //   style={{ position: "absolute", left: "50%", top: "25%" }}
        >
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Owner Name"
                value={ownerName}
                onChange={(e) => {
                  setOwnerName(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Bivag"
                value={bivag}
                onChange={(e) => {
                  setBivag(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Zilla"
                value={zilla}
                onChange={(e) => {
                  setZilla(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Mouza"
                value={mouza}
                onChange={(e) => {
                  setMouza(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control fileupload-input"
                placeholder="Map"
                value={map}
                onChange={(e) => {
                  setMap(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="">
            <div className="form-group file-choose">
              <label htmlFor="file">Choose Property Image</label>
              <input
                type="file"
                filename="image"
                className=""
                onChange={onChangeFile}
              />
            </div>
          </div>
          <button
            onClick={fileuploads}
            type="submit"
            className="btn btn-primary fileupload-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fileupload;
