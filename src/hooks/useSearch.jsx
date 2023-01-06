import { useState, useEffect } from 'react';
import useGetData from './useGetData';

const useSearch = (url, keyName) => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [key, setKey] = useState('');

  const { Data, loading, getData, setData } = useGetData(url, keyName, setKey);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value == '' || null) getData(url);

    const results = Data.filter((el) => {
      let keyz = el.hasOwnProperty(key);
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
    url,
  };
};

export default useSearch;
