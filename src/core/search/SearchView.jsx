import React from 'react';
import './Search.css';

const SearchView = (props) => {
  
  if (props.loading) return <div className="search_loading">Loading...</div>;

  return (
    <>
      <div className="search_input">
        <input
          placeholder="search product here..."
          type="text"
          value={props.searchTerm}
          onChange={(e) => {
            props.handleSearch(e);
          }}
        />
      </div>

      {props.Data?.map((el) => (
        <ul key={el.id} className="search_ul">
          <img src={el.image} alt="img" width="60px" />
          <li>
            <span className="search_name">Title:</span> {el.title}
          </li>
          <li>
            <span className="search_name">category:</span> {el.title}
          </li>
          <li>
            <span className="search_name">description:</span> {el.description}
          </li>
          <li>
            <span className="search_name">price:</span>
            {el.price}
          </li>
        </ul>
      ))}
    </>
  );
};

export default SearchView;
