// https://image.tmdb.org/t/p/original
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/MovieDetails.css";
import blank from "../images/no-image-icon-6.png";

export default class MovieDetails extends Component {
  renderPoster = () => {
    const { poster_path, id } = this.props.movie;
    return this.props.movie.poster_path ? (
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="poster"
          className="movie__poster"
        />
      </Link>
    ) : (
      <Link to={`/movie/${id}`}>
        <img src={blank} alt="poster" className="movie__poster" />
      </Link>
    );
  };

  render() {
    const { title, vote_average, release_date } = this.props.movie;
    return (
      <div className="movie__card">
        {this.renderPoster()}
        <div className="card__footer">
          <h3>{title}</h3>
          <div className="card__footerDetails">
            <p>
              {vote_average}{" "}
              <span role="img" aria-label="rating">
                ⭐
              </span>
            </p>
            <p>{release_date ? release_date.slice(0, 4) : ""}</p>
          </div>
        </div>
      </div>
    );
  }
}
