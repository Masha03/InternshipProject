import React from "react";

function Movie(props) {
  return <div className="movie-page">hello movie{props.match.params.id}</div>;
}

export default Movie;
