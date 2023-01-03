import { useState, useEffect } from 'react';

const useSearch = () => {
  const [Data, setData] = useState();
  const [searchTerm, setSearchTerm] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value, 'e.target.value)');

    if (e.target.value == '' || null) getData();

    const results = Data.filter((el) => {
      return el.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setData(results);
  };

  return { searchTerm, loading, Data, setSearchTerm, handleSearch };
};

export default useSearch;
