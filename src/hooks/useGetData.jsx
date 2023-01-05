import React from 'react'
import { useState, useEffect } from 'react';


const useGetData = (url) => {
    const [loading, setLoading] = useState(false);
    const [Data, setData] = useState();

    const getData = (url) => {
        setLoading(true);
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
             setData(json);
            setLoading(false);
          });
      };
    
      useEffect(() => {
        setLoading(true);
        getData(url);
      }, []);


  return { Data, loading, getData, setData }
}

export default useGetData