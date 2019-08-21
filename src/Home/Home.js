import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

function Home() {
  return (
    <div>
      <Link to="about">Go To About Page</Link>
      <Card></Card>
    </div>
  );
}

export default Home;
