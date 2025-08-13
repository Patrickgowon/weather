import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      // Blur the input on submit to hide mobile keyboard
      e.target.blur();
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`search-bar ${isFocused ? 'focused' : ''}`}
    >
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search city..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-label="Search for a city"
        />
        {input && (
          <button 
            type="button" 
            className="clear-btn"
            onClick={clearInput}
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}
      </div>
      <button 
        type="submit" 
        className="search-btn"
        disabled={!input.trim()}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;