import GetMovies from "../apis/GetMovies";

export const getMoviesByPopular = (pageId) => async (dispatch) => {
  const response = await GetMovies.get("/movie/popular", {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "en-US",
      page: pageId,
    },
  });
  dispatch({ type: "GET_MOVIES_BY_POPULAR", payload: response.data });
};

export const getMoviesByTopRated = (pageId) => async (dispatch) => {
  const response = await GetMovies.get("/movie/top_rated", {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "en-US",
      page: pageId,
    },
  });
  dispatch({ type: "GET_MOVIES_BY_TOP_RATED", payload: response.data });
};

export const getMoviesByUpcoming = (pageId) => async (dispatch) => {
  const response = await GetMovies.get("/movie/upcoming", {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "en-US",
      page: pageId,
    },
  });
  dispatch({ type: "GET_MOVIES_BY_UPCOMING", payload: response.data });
};

export const getSpecificMovie = (movieId) => async (dispatch) => {
  const response = await GetMovies.get(`/movie/${movieId}`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      append_to_response: "videos",
      language: "en-US",
    },
  });
  dispatch({ type: "GET_SPECIFIC_MOVIE", payload: response.data });
};

export const getRecommendation = (movieId) => async (dispatch) => {
  const response = await GetMovies.get(`/movie/${movieId}/recommendations`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
  dispatch({ type: "GET_RECOMMENDATION", payload: response.data });
};

export const getMovieBySearchTerm = (term, pageId = 1) => async (dispatch) => {
  try {
    const response = await GetMovies.get("/search/movie", {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: term,
        page: pageId,
      },
    });
    dispatch({ type: "GET_MOVIES_BY_SEARCHTERM", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
