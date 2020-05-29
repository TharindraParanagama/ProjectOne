import React, { useState, useEffect } from "react";

export default function Catalog() {
  const [res, setRes] = useState();

  useEffect(() => {
    fetch("http://3.14.15.62:5000/search")
      .then((result) => result.text())
      .then((data) => setRes(data));
  });

  return (
    <>
      <div>{res}</div>
    </>
  );
}
