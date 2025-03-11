import React, { useState } from "react";
import Header from "./Header/Header";
import Map from "./Map/Map.jsx";

const App = () => {
  const [searchQuery, setsearchQuery] = useState("");

  return (
    <>
      <Header setSearchQuery={setsearchQuery} />
      <Map searchQuery={searchQuery} />
    </>
  );
};

export default App;
