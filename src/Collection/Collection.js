import React from "react";
import "./Collection.css";
import Card from "../Card/Card";
import { API_KEY } from "../constant";
import { Link } from "react-router-dom";

class Collection extends React.Component {
  state = {
    status: "Succes",
    movies: [],
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_KEY +
        "&sort_by=" +
        this.props.sorting
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          movies: response.results.map(movie => {
            return {
              title: movie.original_title,
              description: movie.overview,
              src:
                movie.poster_path &&
                "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genre_ids,
            };
          }),
        });
      });
  }

  render() {
    console.log(this.state.movies);
    return (
      <div className="collection">
        {this.state.movies.slice(0, this.props.cardCount).map((movie, i) => {
          return (
            <div>
              <Card
                title={movie.title}
                key={i}
                genres={movie.genres}
                description={movie.description}
                src={movie.src}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Collection;
