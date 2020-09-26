import React, { useState, useEffect } from "react";
import axios from 'axios';

const ShoppingList = () => {
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/product/");
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>shopping list</div>
      {data?.results?.map(
        (item: { code: string; name: string; is_linked: boolean }) => (
          <div key={item.name}>{item.is_linked && item.name}</div>
        )
      )}
    </>
  );
};

export default ShoppingList;
