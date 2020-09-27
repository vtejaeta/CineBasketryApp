import React from "react";
import { Link } from "react-router-dom";

function ErrorCompo() {
  return (
    <div className="error__boxcontainer" style={{ marginTop: "200px" }}>
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

export default ErrorCompo;
