import React from 'react'
import "./DynamicSearch.css"

const SearchPanelCopy= (props) => {
  if (props.loading) return <div className="search_loading">Loading...</div>;

  return (
    <div>
        {props.Data?.map((el) => (
        <div key={el.id} className="dynamic_searchpanel">
          <img src={el.image} alt="img" width="60px" />
          <div>
            <span className="search_name">Title:</span> {el.title}
          </div>
          <div>
            <span className="search_name">category:</span> {el.title}
          </div>
          <div>
            <span className="search_name">description:</span> {el.description}
          </div>
          <div>
            <span className="search_name">price:</span>
            {el.price}
          </div>
        </div>
      ))}      
    </div>
  )
}

export default SearchPanelCopy