import React from "react";

export default function Login() {
  return (
    <form>
      <br />
      <div className="container">
        <div className="form-group col-lg-5">
          <label htmlFor="exampleInputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group col-lg-5">
          <label htmlFor="exampleInputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
          />
        </div>
        <div className="form-group col-lg-5">
          <label htmlFor="exampleInputRole">Role</label>
          <input type="role" className="form-control" id="exampleInputRole" />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </div>
    </form>
  );
}
