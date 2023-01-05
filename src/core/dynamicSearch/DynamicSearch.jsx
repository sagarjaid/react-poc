import React , {useState} from 'react'
import useSearch from '../../hooks/useSearch';
import "./DynamicSearch.css"
import DynamicSearchView from './DynamicSearchView';

const DynamicSearch = ({modalName}) => {
    const [openModal, setOpenModal] = useState(false);
    let url = 'https://jsonplaceholder.typicode.com/users'

    const { searchTerm, loading, Data, setSearchTerm, handleSearch, setKey } =useSearch(url);

    console.log(Data, "Data for dynamic search");
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
                    setKey={setKey}
                    />
            </div>
        </div>
    }
    </>
  )
}

export default DynamicSearch