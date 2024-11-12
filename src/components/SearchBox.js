import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
