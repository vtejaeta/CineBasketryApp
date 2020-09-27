import React, { Component } from "react";
import { connect } from "react-redux";
import { getSpecificMovie } from "../actions";
import "../styles/SpecificMovie.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createBrowserHistory } from "history";
import _ from "lodash";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import blank from "../images/no-image-icon-6.png";

const history = createBrowserHistory();

export class SpecificMovie extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSpecificMovie(id);
  }

  renderBack = () => {
    history.goBack();
  };

  renderGenres = () => {
    const genresArray = _.map(this.props.movieDetails.genres, "name");
    return genresArray.join(", ");
  };

  renderTrailerButton = () => {
    const results = this.props.movieDetails.videos.results;
    return results[0] ? (
      <a
        href={`https://www.youtube.com/watch?v=${results[0].key}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="trailer">
          <PlayArrowIcon />
          <span>View Trailer</span>
        </button>
      </a>
    ) : (
      <></>
    );
  };

  renderPoster = () => {
    const { poster_path } = this.props.movieDetails;
    return poster_path ? (
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt="poster"
        className="specific__moviePoster"
      />
    ) : (
      <img src={blank} alt="poster" className="specific__moviePoster" />
    );
  };

  render() {
    const {
      original_title,
      overview,
      release_date,
      runtime,
    } = this.props.movieDetails;

    const runtimeString = `${Math.floor(runtime / 60)}h ${Math.floor(
      runtime % 60
    )}m`;

    return overview ? (
      <div className="specific__movieCard">
        {this.renderPoster()}
        <div className="specific__cardRight">
          <button onClick={this.renderBack} className="back">
            <ArrowBackIosIcon style={{ fontSize: "1rem" }} />
            <span> Go back</span>
          </button>
          <h1>
            {`${original_title}`} <span>{`(${release_date.slice(0, 4)})`}</span>
          </h1>
          <p className="runtime">Runtime: {runtimeString}</p>
          <p className="genres">Genres: {this.renderGenres()}</p>
          <p className="overview">{overview}</p>
          {this.renderTrailerButton()}
        </div>
      </div>
    ) : (
      <div className="loading__spinner">
        <CircularProgress />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movieDetails: state.movies };
};

export default connect(mapStateToProps, { getSpecificMovie })(SpecificMovie);
