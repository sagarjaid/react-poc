import React from 'react'
import SearchPanel from './SearchPanel';



const DynamicSearchView = (props) => {

  return (
    <>
      <div className="search_input">
        <input
          placeholder="search product here..."
          type="text"
          value={props.searchTerm}
          onChange={(e) => {
            props.setKey("name");
            props.handleSearch(e)
          }}
        />
      </div>
      <SearchPanel Data={props.Data} loading={props.loading}/>
    </>
  );
};

export default DynamicSearchView;
