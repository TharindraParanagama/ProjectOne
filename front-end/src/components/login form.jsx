import React from "react";

export default function Login() {
  return (
    <form>
      <br />
      <div className="container">
        <div className="form-group col-lg-5">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group col-lg-5">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </div>
    </form>
  );
}
