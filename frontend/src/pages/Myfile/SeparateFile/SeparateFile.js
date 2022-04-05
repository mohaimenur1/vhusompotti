import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SeparateFile.css";
import propimg4 from "./propimg4.jpg";
import { Link, useParams } from "react-router-dom";

const SeparateFile = () => {
  const [infile, setInFile] = useState();
  // let { fileid } = useParams();

  useEffect(() => {
    (async () => {
      try {
        // const data = (await axios.get(`/api/users/${fileid}`), { fileid }).data;
        const data = (await axios.get(`/api/users/:fileid`)).data;
        setInFile(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <h1 className="text-center">File Details</h1>
      <div className="container">
        <div className="row">
          <div className="col image-container">
            <img src={propimg4} />
          </div>
        </div>
        <div className="row">
          <div className="col detail-container">
            <div className="jumbotron">
              {/* <h4 className="h4">Id:{fileid}</h4> */}
              {/* <h4 className="h4">owner name:{fileid(infile.ownerName)}</h4>
              <h4 className="h4">Bivag:{fileid.ownerName}</h4>
              <h4 className="h4">owner name:{fileid.ownerName}</h4> */}
              {/* <h4 className="h4">Bivag:{infile.ownerName}</h4> */}

              {infile &&
                infile.map((sfile) => {
                  return (
                    <>
                      <h3 className="h3">Name: {sfile.ownerName}</h3>
                      <h3>Zilla:{sfile.zilla}</h3>
                    </>
                  );
                })}

              {/* <h4 className="h4">Name:{file.ownerName}</h4>
              <h4 className="h4">bivag:{file.bivag}</h4>
              <h4 className="h4">Mouza:{file.mouza}</h4>
              <h4 className="h4">amount:10 katha</h4> */}

              <hr className="my-4" />
              <h3>google map</h3>
              <hr className="my-2" />
              <Link to="/post" className="btn btn-primary">
                Share for Sell
              </Link>
              <Link to="/myfile" className="btn btn-success">
                Back!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparateFile;
