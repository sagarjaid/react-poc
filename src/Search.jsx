import React from 'react';
import SearchView from './SearchView';
import useSearch from './hooks/useSearch';
import './Search.css';

const Search = () => {
  const { searchTerm, loading, Data, setSearchTerm, handleSearch } =
    useSearch();

  return (
    <div className="search_container">
      {
        <SearchView
          hello="hello"
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          loading={loading}
          Data={Data}
        />
      }
    </div>
  );
};

export default Search;
