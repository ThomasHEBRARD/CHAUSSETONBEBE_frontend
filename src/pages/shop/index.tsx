import React, { useState, useEffect } from 'react';
import shopClient from '../../services/api/shop_client';
import { ProductProps } from '../../services/type/product';
import styled from '@emotion/styled';

const StyledProductName = styled.div``;
const StyledProductPrice = styled.div``;
const StyledProductDescription = styled.div``;
const StyledProductContainer = styled.div`
    display: inline-block;
    text-align: center;
    padding: 300px 10px 10px 10px;
    border: solid 1px red;
    border-radius: 5px;
`;

const ProductDisplay = (props: ProductProps) => {
    const { name, price, description } = props;
    return (
        <StyledProductContainer>
            <StyledProductName>{name}</StyledProductName>
            <StyledProductDescription>{description}</StyledProductDescription>
            <StyledProductPrice>{price} €</StyledProductPrice>
        </StyledProductContainer>
    );
};

const StyledShoppingList = styled.div`
    margin: 3%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-row-gap: 50px;
    grid-column-gap: 5%;
`;

const ShoppingList = () => {
    const [data, setData] = useState<any>();

    const fetchData = async () => {
        setData(await shopClient.getProducts());
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <StyledShoppingList>
            {data?.results?.map((product: ProductProps) => (
                <ProductDisplay
                    key={product.code}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </StyledShoppingList>
    );
};

export default ShoppingList;
