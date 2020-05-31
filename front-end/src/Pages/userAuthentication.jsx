import React, { useState } from "react";
import Login from "../components/login form";
import swal from "sweetalert";

export default function Authentication() {
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
    fetch("http://3.23.132.211:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "You are logged in") {
          swal("Congrats", data, "success");
        } else {
          swal("Sorry", data, "error");
        }
      });
  }

  return (
    <>
      <div>
        <Login onSubmit={handleSubmit} onChange={handleChange} res={res} />
      </div>
    </>
  );
}
