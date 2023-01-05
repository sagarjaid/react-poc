import { useState, useEffect } from 'react';
import useGetData from './useGetData';

const useSearch = (url) => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [key, setKey] = useState('');

  const { Data, loading, getData, setData } = useGetData(url);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value, 'e.target.value');
    if (e.target.value == '' || null) getData(url);

    const results = Data.filter((el) => {
      let keyz = el.hasOwnProperty(key);
      console.log(keyz, 'keyz');
      if (keyz && key) {
        return el[key]?.toLowerCase().includes(e.target.value.toLowerCase());
      }
    });

    setData(results);
  };

  return {
    searchTerm,
    loading,
    Data,
    setSearchTerm,
    handleSearch,
    setKey,
    url,
  };
};

export default useSearch;
