import React from 'react';

const SearchBar = ({ city, onChange, onSearch, loading }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={onChange}
        disabled={loading}
      />
      <button onClick={onSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchBar;
