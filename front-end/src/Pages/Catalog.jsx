import React, { useState } from "react";

export default function Catalog() {
  const [search, setSearch] = useState();

  fetch("http://3.23.132.211:5000/search")
    .then((result) => result.text())
    .then((data) => setSearch(data));

  return (
    <>
      <div>{search}</div>
    </>
  );
}
