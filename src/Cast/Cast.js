import React from "react";

import "./Cast.css";

function Cast({ cast }) {
  console.log("Cast", cast);
  return (
    <div className="actors">
      <ul className="movie-actors">
        {cast &&
          cast.map((actor, index) => {
            return (
              <li key={index} className="actors-details">
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
