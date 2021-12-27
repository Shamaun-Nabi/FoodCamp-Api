import React, { useState } from "react";
import FoodCard from "./FoodCard/FoodCard";
import "./SearchBar.css";
// import FoodCard from "./components/SearchBar/FoodCard/FoodCard";
// import { ArrowRight } from "react-bootstrap-icons";
export default function SearchBar() {
  const [inputValue, setinputValue] = useState("");
  const [queryItem, setQueryItem] = useState("Banana");
  const [error, setError] = useState("d-none");

  const searchItem = (e) => {
    if (inputValue === "") {
      setError("d-block");
    } else {
      setError("d-none");
      e.preventDefault();
      setQueryItem(inputValue);
    }

    console.log(typeof queryItem);
  };
  const searchInput = (e) => {
    setinputValue(e.target.value);
    console.log("inputValue=", inputValue);
  };
  return (
    <>
      <div className="SearchBarContainer">
        <div className="searchBarWrapper container row d-flex align-items-center justify-content-center">
          <div className="rightBar col-5 ">
            <div className="logoContainer d-flex align-items-center justify-content-center">
              <img className="logo" src="/images/logo1.png" alt="" />
              <h3 className="logoText">Food Camp</h3>
            </div>
          </div>
          <form method="get" action="" className="leftBarBar col-7">
            <input
              onChange={searchInput}
              className="form-control w-75 text-center searchInput"
              placeholder="Search Here"
              type="text"
              required="required"
            />
            <input
              type="submit"
              className="btn searchBtn"
              onClick={searchItem}
            />
          </form>
          <span className={`${error} text-center text-danger`}>Please Fill out</span>
        </div>
      </div>
      {/* Food Card Area */}
      <FoodCard itemName={queryItem} />
    </>
  );
}
