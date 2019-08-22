import React from "react";
import "./Card.css";
import { API_KEY } from "../constant";
import { functionTypeAnnotation } from "@babel/types";

function Card() {
  return (
    <section className="collection">
      <div className="card-item">
        <img
          src="https://at-cdn-s01.audiotool.com/2014/09/19/albums/4FlEy3hz/cover256x256-ee92c401539b45f68dc183336846cb9c.jpg"
          align="left"
        />
        <div className="card-details">
          <h4 className="card-details-title">Title</h4>
          <p className="genre">Lorem Ipsum is simply</p>
          <p className="card-details-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
      </div>
      <div className="card-item">
        <img
          src="https://ecsmedia.pl/c/the-dark-side-of-the-moon-w-iext35454968.jpg"
          align="left"
        />
        <div className="card-details">
          <h4 className="card-details-title">Title</h4>
          <p className="genre">Lorem Ipsum is simply</p>
          <p className="card-details-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of typ/.
          </p>
        </div>
      </div>
      <div className="card-item">
        <img
          src="https://cdn131.picsart.com/302196089095201.jpg?c256x256"
          align="left"
        />
        <div className="card-details">
          <h4 className="card-details-title">Title</h4>
          <p className="genre">Lorem Ipsum is simply</p>
          <p className="card-details-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
      </div>
      <div className="card-item">
        <img
          src="http://cdn.shopify.com/s/files/1/2076/4993/collections/Minimal_Luxe_large_5abf8ea8-dcb3-44da-b029-6cd0058d7f9c_1200x1200.png?v=1527680539"
          align="left"
        />
        <div className="card-details">
          <h4 className="card-details-title">Title</h4>
          <p className="genre">Lorem Ipsum is simply</p>
          <p className="card-details-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
