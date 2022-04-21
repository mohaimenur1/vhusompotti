import React from "react";
import { Link } from "react-router-dom";
import SeparateFile from "../SeparateFile/SeparateFile";

const File = ({ id, ownername, bivag, zilla, mouza, amount, image }) => {
  return (
    <div>
      <div>
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
            {/* {files &&
              files.map((myfile) => ( */}

            <tr key={id}>
              <td>{id}</td>
              <td>{ownername}</td>
              <td>{amount}</td>

              <div className="myfile-buutton">
                <td>
                  <Link className="btn btn-primary" to="/post">
                    Share
                  </Link>
                </td>
                <td>
                  <Link
                    // files={files}
                    // to={`/${id}`}
                    to="/:id"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#staticBackdrop"
                  >
                    {/* <SeparateFile
                      className="btn btn-success"
                      id={id}
                      ownername={ownername}
                      bivag={bivag}
                      mouza={mouza}
                      amount={amount}
                      image={image}
                    > */}
                    {/* modal */}
                    {/* <button
                      type="button"
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#staticBackdrop"
                    >
                      View
                    </button> */}
                    {/* <!-- Modal --> */}
                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-backdrop="static"
                      data-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div
                          className="modal-content"
                          style={{ width: "65rem" }}
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              ID: {id}
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            {/* <div className="name">Name: {ownername}</div>
                            <div className="bivag">Bivag: {bivag}</div>
                            <div className="zilla">Zilla: {zilla}</div>
                            <div className="mouza">Mouza: {mouza}</div>
                            <div className="amount">Amount: {amount}</div> */}
                            <SeparateFile
                              id={id}
                              ownername={ownername}
                              bivag={bivag}
                              mouza={mouza}
                              amount={amount}
                              image={image}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    View
                    {/* <SeparateFile
                      id={id}
                      ownername={ownername}
                      bivag={bivag}
                      mouza={mouza}
                      amount={amount}
                      image={image} */}
                  </Link>
                </td>
                <td>
                  <Link to="/myfile/:id" className="btn btn-danger">
                    Delete
                  </Link>
                </td>
              </div>
            </tr>
            {/* //   ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default File;
