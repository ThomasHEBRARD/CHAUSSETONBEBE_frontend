import React, { useState, useEffect } from "react";
import shopClient from "../../services/api/shop_client";

const ShoppingList = () => {
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    setData(await shopClient.getProducts());
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
