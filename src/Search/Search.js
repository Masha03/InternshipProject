import React, { Component } from "react";
import { API_KEY } from "../constant";

class Search extends Component {
  state = { value: "" };

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
      .then(result => console.log(result));
  }

  render() {
    return (
      <div className="search-page">
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <button onClick={this.handleClick.bind(this)}>Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
