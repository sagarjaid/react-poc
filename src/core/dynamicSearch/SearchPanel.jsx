import React from 'react'
import "./DynamicSearch.css"

const SearchPanel = (props) => {
  if (props.loading) return <div className="search_loading">Loading...</div>;

  return (
    <div>
      {props.Data?.map((el) => (
        <div key={el.id} className="dynamic_searchpanel">
          <div>
            <span className="search_name">Users Name:</span> {el.name}
          </div>
          <div>
            <span className="search_name">Users UserNames:</span> {el.username}
          </div>
          <div>
            <span className="search_name">Users email id :</span> {el.email}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchPanel