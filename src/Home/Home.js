import React from "react";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection";

import "./Home.css";

function Home() {
  return (
    <div className="home-content">
      <div className="collection-content">
        <div className="type-title">Popular</div>
        <Collection sorting={"popularity.desc"} cardCount={4}></Collection>
        <Link className="more-info" to="popular">
          View More
        </Link>
      </div>
      <div className="collection-content">
        <div className="type-title">New</div>
        <Collection
          sorting={"primary_release_date.desc"}
          cardCount={4}></Collection>
        <Link className="more-info" to="popular">
          View More
        </Link>
        {/* <Link to="/about">Go To About Page</Link> */}
      </div>
    </div>
  );
}

export default Home;
