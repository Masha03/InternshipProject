import React, { Component } from "react";
import { API_KEY } from "../constant";
import "./Search.css";

import Card from "../Card/Card";

class Search extends Component {
  state = {
    value: "",
    movies: [],
  };

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleClick() {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        API_KEY +
        "&query=" +
        this.state.value
    )
      .then(response => response.json())
      .then(object => {
        this.setState({
          movies: object.results.map(movie => ({
            title: movie.original_title,
            description: movie.overview,
            src:
              movie.poster_path &&
              "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            genres_names: movie.genre_ids,
            id: movie.id,
          })),
        });
      });
  }

  render() {
    return (
      <div className="search-page">
        <div className="search-space">
          <input
            className="input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />

          <button
            className="search-button"
            onClick={this.handleClick.bind(this)}>
            Search
          </button>
        </div>
        <div className="collection">
          {this.state.movies.map((movie, i) => {
            return (
              <div key={i}>
                <Card
                  title={movie.title}
                  genres={movie.genres_names}
                  description={movie.description}
                  src={movie.src}
                  to={"/movie/" + movie.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
