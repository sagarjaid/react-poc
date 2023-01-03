import React , {useState} from 'react'
import useSearch from '../../hooks/useSearch';
import "./DynamicSearch.css"
import DynamicSearchView from './DynamicSearchView';

const DynamicSearch = ({modalName}) => {
    const [openModal, setOpenModal] = useState(false);

    const { searchTerm, loading, Data, setSearchTerm, handleSearch } =useSearch();
  return (
    <>
    <div onClick={()=>setOpenModal(true)}>{modalName}</div>
    {
        openModal && <div className='dynamic_container'>
            <div className='dynamic_menu'>
            <div onClick={()=>setOpenModal(false)}>
                Close X
                    </div>
            </div>
            <div>
            <DynamicSearchView
                    hello="hello"
                    handleSearch={handleSearch}
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                    loading={loading}
                    Data={Data}
                    />
            </div>
        </div>
    }
    </>
  )
}

export default DynamicSearch