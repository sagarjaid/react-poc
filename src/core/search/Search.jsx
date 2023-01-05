import React from 'react';
import SearchView from './SearchView';
import useSearch from '../../hooks/useSearch';
import './Search.css';

const Search = () => {
  let url = 'https://fakestoreapi.com/products'
  const { searchTerm, loading, Data, setSearchTerm, handleSearch, setKey } =
    useSearch(url);

  return (
    <>
    <div className="search_container">
      {
        <SearchView
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          loading={loading}
          Data={Data}
          setKey={setKey}
        />
      }
    </div>
    </>
  );
};

export default Search;
