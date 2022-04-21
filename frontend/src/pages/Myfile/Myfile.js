import axios from "axios";
import React, { useState, useEffect } from "react";

import Navbar from "../Dashboard/Navbar/Navbar";
import SideBar from "../Dashboard/SideBar/SideBar";
import File from "./File.js/File";
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
        {files &&
          files.map((myfile) => (
            <File
              id={myfile._id}
              ownername={myfile.ownerName}
              bivag={myfile.bivag}
              zilla={myfile.zilla}
              mouza={myfile.mouza}
              amount={myfile.amount}
              image={myfile.image}
            />

            // <tr key={myfile._id}>
            //   <td>{myfile._id}</td>
            //   <td>{myfile.ownerName}</td>
            //   <td>{myfile.amount}</td>

            //   <div className="myfile-buutton">
            //     <td>
            //       <Link className="btn btn-primary" to="/post">
            //         Share
            //       </Link>
            //     </td>
            //     <td>
            //       <Link
            //         // files={files}
            //         to={`/${myfile._id}`}
            //         className="btn btn-success"
            //       >
            //         View
            //       </Link>
            //     </td>
            //     <td>
            //       <Link to="/myfile/:id" className="btn btn-danger">
            //         Delete
            //       </Link>
            //     </td>
            //   </div>
            // </tr>
          ))}
        {/* <File /> */}
      </div>
    </div>
  );
};

export default Myfile;
