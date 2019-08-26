import React from "react";
import { API_KEY } from "../constant";

import "./Cast.css";

function Cast({ cast }) {
  console.log("Cast", cast);
  return (
    <div className="actors">
      <ul className="movie-actors">
        {cast &&
          cast.map((actor, index) => {
            console.log("actor", actor);
            return (
              <li className="actors-details">
                <img className="actor-image" src={actor.image} alt="" />
                <div className="names">
                  <p className="actor-name">{actor.name}</p>
                  <p className="actor-role">{actor.role}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Cast;
