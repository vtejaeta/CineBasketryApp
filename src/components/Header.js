import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import "../styles/Header.css";
import { useState } from "react";

function Header() {
  const history = useHistory();
  const [movieName, setMovieName] = useState("");
  const [clickedMenu, setClickedMenu] = useState(false);
  const handleInput = (event) => {
    setMovieName(event.target.value);
  };

  const handleTermInput = () => {
    history.push(`/search/${movieName}`);
    setMovieName("");
  };

  if (clickedMenu) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }

  const handleClick = () => {
    setClickedMenu(!clickedMenu);
  };

  const name = clickedMenu ? "hamburger active" : "hamburger";
  const navName = clickedMenu ? "header__mobile active" : "header__mobile";
  return (
    <>
      <div className={navName}>
        <div className="mobile__wrapper">
          <ul>
            <li>
              <NavLink to="/browse/popular" onClick={handleClick}>
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse/top-rated" onClick={handleClick}>
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse/upcoming" onClick={handleClick}>
                Upcoming
              </NavLink>
            </li>
          </ul>
          <form onSubmit={handleTermInput}>
            <input
              type="text"
              placeholder="Search movies..."
              value={movieName}
              onChange={handleInput}
            />
          </form>
        </div>
      </div>
      <div className="header__container">
        <div className="header">
          <Link to="/">
            <h1
              onClick={() => {
                setClickedMenu(false);
              }}
            >
              <span role="img" aria-label="fav">
                🍿
              </span>
              CINEBASKETRY
            </h1>
          </Link>
          <div className="header__navItems">
            <ul>
              <li>
                <NavLink to="/browse/popular">Popular</NavLink>
              </li>
              <li>
                <NavLink to="/browse/top-rated">Top Rated</NavLink>
              </li>
              <li>
                <NavLink to="/browse/upcoming">Upcoming</NavLink>
              </li>
            </ul>
            <form onSubmit={handleTermInput}>
              <input
                type="text"
                placeholder="Search movies..."
                value={movieName}
                onChange={handleInput}
              />
            </form>
          </div>
          <div className={name} onClick={handleClick}>
            <div className="l"></div>
            <div className="l"></div>
            <div className="l"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
