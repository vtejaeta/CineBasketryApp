import React from "react";
import "../styles/App.css";
import MoviesList from "./MoviesList";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Header from "./Header";
import MoviesListByTopRated from "./MoviesListByTopRated";
import MoviesListByUpcoming from "./MoviesListByUpcoming";
import SpecificMovie from "./SpecificMovie";
import ErrorCompo from "./ErrorCompo";
import SearchResults from "./SearchResults";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/browse/popular" />
          </Route>
          <Route exact path="/browse/popular" component={MoviesList} />
          <Route
            exact
            path="/browse/upcoming"
            component={MoviesListByUpcoming}
          />
          <Route
            exact
            path="/browse/top-rated"
            component={MoviesListByTopRated}
          />
          <Route exact path="/movie/:id" component={SpecificMovie} />
          <Route path="/search/:term" component={SearchResults} />
          <Route component={ErrorCompo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
