import React from "react";
import "./Collection.css";
import Card from "../Card/Card";
import { API_KEY } from "../constant";

class Collection extends React.Component {
  state = {
    status: "Succes",
    movies: [],
  };

  componentDidMount() {
    console.log("Collection did mount!");
    console.log("Collection state: ", this.state);
    this.setState({ status: "error" });

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY)
      .then(response => response.json())
      .then(response => {
        this.setState({
          movies: response.results.map(movie => {
            return {
              title: movie.original_title,
              description: movie.overview,
              src: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
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
        {this.state.movies.map((movie, i) => {
          return (
            <Card
              title={movie.title}
              key={i}
              genres={movie.genres}
              description={movie.description}
              src={movie.src}
            />
          );
        })}
      </div>
    );
  }
}

export default Collection;
