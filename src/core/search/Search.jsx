import React from 'react';
import SearchView from './SearchView';
import useSearch from '../../hooks/useSearch';
import './Search.css';

const Search = () => {

  let url = 'https://fakestoreapi.com/products'
  let keyName = 'title'
  
  const { searchTerm, loading, Data, setSearchTerm, handleSearch } =
    useSearch(url, keyName);

  return (
    <>
      <div className="search_container">
          <SearchView
            handleSearch={handleSearch}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            loading={loading}
            Data={Data}
          />
      </div>
    </>
  );
};

export default Search;
