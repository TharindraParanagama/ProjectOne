import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Logout() {
  function logout() {
    Axios.get("http://13.58.157.19:5000/logout").then((data) =>
      console.log("logged out")
    );
  }
  return (
    <Link to="/">
      <button
        type="button"
        className="btn btn-info float-right m-3"
        onClick={logout}
      >
        logout
      </button>
    </Link>
  );
}
