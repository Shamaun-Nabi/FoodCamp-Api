import React from "react";
import "./SearchBar.css";
// import { ArrowRight } from "react-bootstrap-icons";
export default function SearchBar() {
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
          <div className="leftBarBar col-7">
            <input
              className="form-control w-75 text-center searchInput"
              placeholder="Search Your Food "
              type="text"
            />
            <button className="btn  searchBtn"> Search</button>
          </div>
        </div>
      </div>
    </>
  );
}
