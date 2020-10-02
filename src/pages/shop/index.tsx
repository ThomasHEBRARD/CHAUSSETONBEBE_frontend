import React, { useState, useEffect } from 'react';
import shopClient from '../../services/api/shop_client';
import { Product } from '../../services/type/product';

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
            {data?.results?.map((product: Product) => (
                <div key={product.name}>{product.is_linked && product.name}</div>
            ))}
        </>
    );
};

export default ShoppingList;
