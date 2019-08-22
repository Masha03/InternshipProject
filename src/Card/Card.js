import React from "react";
import "./Card.css";
import { API_KEY } from "../constant";
import { functionTypeAnnotation } from "@babel/types";

function Card({ title, genres, description, src }) {
  return (
    <div className="card-item">
      <img src={src} className="image" />
      <div className="movie-details">
        <h4 className="movie-title">{title}</h4>
        <ul className="genre">
          {genres.map((genre, id) => (
            <li key={id} className="genre-name">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie-description">{description}</p>
        <button className="button">READ MORE</button>
      </div>
    </div>
  );
}

export default Card;
