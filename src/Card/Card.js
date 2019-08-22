import React from "react";
import "./Card.css";
import { API_KEY } from "../constant";
import { functionTypeAnnotation } from "@babel/types";

function Card() {
  return (
    <section className="collection">
      <div className="card-item">
        <img src="https://at-cdn-s01.audiotool.com/2014/09/19/albums/4FlEy3hz/cover256x256-ee92c401539b45f68dc183336846cb9c.jpg" />
        <div className="movie-details">
          <h4 className="movie-title">Title</h4>
          <ul className="genre">
            <li className="genre-name">Action</li>
            <li className="genre-name">Crime</li>
            <li className="genre-name">Sci-fi</li>
          </ul>
          <p className="movie-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <button className="button">READ MORE</button>
        </div>
      </div>
      <div className="card-item">
        <img src="https://ecsmedia.pl/c/the-dark-side-of-the-moon-w-iext35454968.jpg" />
        <div className="movie-details">
          <h4 className="movie-title">Title</h4>
          <ul className="genre">
            <li className="genre-name">Action</li>
            <li className="genre-name">Crime</li>
            <li className="genre-name">Sci-fi</li>
          </ul>
          <p className="movie-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of typ/.
          </p>
          <button className="button">READ MORE</button>
        </div>
      </div>
      <div className="card-item">
        <img src="https://cdn131.picsart.com/302196089095201.jpg?c256x256" />
        <div className="movie-details">
          <h4 className="movie-title">Title</h4>
          <ul className="genre">
            <li className="genre-name">Action</li>
            <li className="genre-name">Crime</li>
            <li className="genre-name">Sci-fi</li>
          </ul>
          <p className="movie-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <button className="button">READ MORE</button>
        </div>
      </div>
      <div className="card-item">
        <img src="http://cdn.shopify.com/s/files/1/2076/4993/collections/Minimal_Luxe_large_5abf8ea8-dcb3-44da-b029-6cd0058d7f9c_1200x1200.png?v=1527680539" />
        <div className="movie-details">
          <h4 className="movie-title">Title</h4>
          <ul className="genre">
            <li className="genre-name">Action</li>
            <li className="genre-name">Crime</li>
            <li className="genre-name">Sci-fi</li>
          </ul>
          <p className="movie-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a
          </p>
          <button className="button">READ MORE</button>
        </div>
      </div>
    </section>
  );
}

export default Card;
