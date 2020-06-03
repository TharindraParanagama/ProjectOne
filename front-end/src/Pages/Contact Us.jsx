import React, { useState } from "react";
import Logout from "../components/logoutSection";
import axios from "axios";
import swal from "sweetalert";

export default function Contact() {
  const [res, setRes] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    setRes({ ...res, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://13.58.157.19:5000/contact", {
        name: res.name,
        email: res.email,
        message: res.message,
      })
      .then((data) => {
        swal("We Received Your Message", data.data, "success");
      });
  }

  return (
    <>
      <Logout />
      <h1 className="display-3 m-2">Contact Us</h1>
      <div className="display-5 m-3">
        <i>Leave a comment and we will get back to you ASAP</i>
      </div>
      <div className="container-fluid">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName">Name</label>
              <input
                type="name"
                className="form-control"
                id="inputName"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={res.name}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="E-mail"
                name="email"
                onChange={handleChange}
                value={res.email}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="textArea">Message</label>
            <textarea
              className="form-control"
              id="textArea"
              rows="3"
              name="message"
              onChange={handleChange}
              value={res.message}
              placeholder="Please type your query here"
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
