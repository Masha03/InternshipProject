import React from "react";
import { API_KEY } from "../constant";

import "./Trailer.css";

function Trailer(props) {
  return (
    <div>
      <div className="trailer-title">Trailer</div>
      <iframe
        width="1280"
        height="720"
        src={"https://www.youtube.com/embed/" + props.trailerID}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
  );
}

export default Trailer;
