import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovieBySearchTerm } from "../actions";
import MovieDetails from "./MovieDetails";
import CircularProgress from "@material-ui/core/CircularProgress";

class SearchResults extends Component {
  componentDidMount() {
    const pageNo = this.props.history.location.search;
    this.props.getMovieBySearchTerm(
      this.props.match.params.term,
      pageNo ? parseInt(pageNo.slice(6)) : 1
    );
  }

  state = {
    pageId: this.props.history.location.search
      ? parseInt(this.props.history.location.search.slice(6))
      : 1,
  };

  handlePageId = async (id) => {
    await this.setState({ pageId: id });
    this.props.getMovieBySearchTerm(
      this.props.match.params.term,
      this.state.pageId
    );
  };

  renderButton = () => {
    if (this.props.movies) {
      if (this.state.pageId === 1 && this.props.total_pages > 1) {
        return (
          <>
            <div></div>
            <Link className="special" to={`?page=${2}`}>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  this.handlePageId(2);
                }}
              >
                Page {this.state.pageId + 1}
              </button>
            </Link>
          </>
        );
      } else if (this.state.pageId === 1 && this.props.total_pages === 1) {
        return <></>;
      } else if (this.state.pageId <= this.props.total_pages - 1) {
        return (
          <>
            <Link to={`?page=${this.state.pageId - 1}`}>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  this.handlePageId(this.state.pageId - 1);
                }}
              >
                Page {this.state.pageId - 1}
              </button>
            </Link>
            <Link to={`?page=${this.state.pageId + 1}`}>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  this.handlePageId(this.state.pageId + 1);
                }}
              >
                Page {this.state.pageId + 1}
              </button>
            </Link>
          </>
        );
      } else if (this.state.pageId === this.props.total_pages) {
        return (
          <>
            <Link to={`?page=${this.state.pageId - 1}`}>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  this.handlePageId(this.state.pageId - 1);
                }}
              >
                Page {this.state.pageId - 1}
              </button>
            </Link>
          </>
        );
      }
      return (
        <div className="error__boxcontainer">
          <div className="error__box">
            <h1>Oh No!</h1>
            <p>It looks like something went wrong!</p>
            <Link to="/">
              <button>Go Home</button>
            </Link>
          </div>
        </div>
      );
    }
    return <></>;
  };

  renderHeading() {
    return (
      <div className="header__details">
        <h2>{this.props.match.params.term}</h2>
      </div>
    );
  }

  renderMovies() {
    const { movies } = this.props;
    return movies ? (
      movies.map((movie) => {
        return <MovieDetails movie={movie} key={movie.id} />;
      })
    ) : (
      <div className="loading__spinner">
        <CircularProgress />
      </div>
    );
  }

  render() {
    console.log(this.props);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return (
      <div className="moviesHeader__container">
        {this.renderHeading()}
        <div className="movies__container">{this.renderMovies()}</div>
        <div className="page__container">{this.renderButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.results,
    total_pages: state.movies.total_pages,
  };
};

export default connect(mapStateToProps, { getMovieBySearchTerm })(
  SearchResults
);
