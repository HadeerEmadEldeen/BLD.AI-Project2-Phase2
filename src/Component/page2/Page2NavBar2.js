import React from "react";
import { Link } from "react-router-dom";
function Page2NavBar2(props) {
  return (
    <div className="third-navbar">
      <div className="container">
        <div className="row ">
          <div className="col col-12 col-lg-8">
            <a href="#description-id" className="w-25 d-inline-block">
              Overflow
            </a>
            <a href="#content-id" className="w-25 d-inline-block">
              Curriculum
            </a>
            <a href="#instractor-id" className="w-25 d-inline-block">
              Instructor
            </a>
            <a href="#reviws-id" className="w-25 d-inline-block">
              Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2NavBar2;
