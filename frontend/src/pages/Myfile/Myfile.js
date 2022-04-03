import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Dashboard/Navbar/Navbar";
import SideBar from "../Dashboard/SideBar/SideBar";
import "./Myfile.css";

const Myfile = () => {
  const [files, setFiles] = useState();

  useEffect(() => {
    (async () => {
      try {
        const alldata = (await axios.get("/api/users/getallfile")).data;
        setFiles(alldata);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <SideBar />

      <div className="myfile-table container">
        <h2 className="text-center">my file</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>Owner Name</th>
              <th>Amount</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {files &&
              files.map((myfile) => (
                <tr>
                  <td>{myfile._id}</td>
                  <td>{myfile.ownerName}</td>
                  <td>{myfile.amount}</td>
                  <div className="myfile-buutton">
                    <td>
                      <Link className="btn btn-primary" to="/post">
                        Share
                      </Link>
                    </td>
                    <td>
                      <Link to="/myfile/:id" className="btn btn-success">
                        View
                      </Link>
                    </td>
                    <td>
                      <Link to="/myfile/:id" className="btn btn-danger">
                        Delete
                      </Link>
                    </td>
                  </div>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myfile;
