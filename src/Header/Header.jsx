import React, { useState } from "react";
import "./Header.css";

const Header = ({ setSearchQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(input);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand">Baghdad Places</a>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={input}
            onChange={handleSearch}
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
