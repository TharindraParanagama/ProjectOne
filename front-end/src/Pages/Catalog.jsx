import React from "react";
import AllBooks from "../Endpoints/allBooks";
import Logout from "../Components/logoutSection";
import FetchByAuthor from "../Endpoints/fetchByAuthor";
import FilterBasedOnSupplierRating from "../Endpoints/filterBasedOnSupplierRating";
import FilterByTitle from "../Endpoints/filterByTitle";
import FilterByPrice from "../Endpoints/filterByPrice";
import Search from "../GoogleBooksAPI/search";

export default function Catalog() {
  return (
    <>
      <Logout />
      <AllBooks />
      <FetchByAuthor />
      <FilterBasedOnSupplierRating />
      <FilterByPrice />
      <FilterByTitle />
      <Search />
    </>
  );
}
