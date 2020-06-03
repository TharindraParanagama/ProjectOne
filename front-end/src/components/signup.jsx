import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function Signup() {
  const [res, setRes] = useState({
    username: "",
    password: "",
    role: "",
  });

  function handleChange(event) {
    setRes({ ...res, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://13.58.157.19:5000/signup", {
        username: res.username,
        password: res.password,
        role: res.role,
      })
      .then((data) => {
        swal("You are all set", data.data, "success");
      });
  }

  return (
    <form>
      <br />
      <div className="container-fluid">
        <div className="display-4">
          Please provide your information to signup
        </div>
        <br />
        <div className="form-group col-lg-6">
          <label htmlFor="InputEmail">Username:</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            onChange={handleChange}
            name="username"
            value={res.username}
          />
        </div>
        <div className="form-group col-lg-6">
          <label htmlFor="InputPassword">Password:</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            onChange={handleChange}
            name="password"
            value={res.password}
          />
        </div>
        <div className="form-group col-lg-6">
          <label htmlFor="InputRole">Role:</label>
          <input
            type="role"
            className="form-control"
            id="InputRole"
            onChange={handleChange}
            name="role"
            value={res.role}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary m-3"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
