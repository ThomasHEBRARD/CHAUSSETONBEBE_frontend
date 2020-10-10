import React, { useState, useEffect } from 'react';
import shopClient from '../../services/api/shop_client';
import { ProductProps } from '../../services/type/product';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const StyledProductName = styled.div``;
const StyledProductPrice = styled.div``;
const StyledProductDescription = styled.div``;
const StyledProductContainer = styled.div<{ image: boolean }>`
    display: inline-block;
    text-align: center;
    ${(props) =>
        props.image
            ? css`
                  padding: 10px;
              `
            : css`
                  padding: 300px 10px 10px 10px;
              `}
    border: solid 1px #D3D3D3;
    border-radius: 5px;
`;

const ProductDisplay = (props: ProductProps) => {
    const { name, price, image, description } = props;
    return (
        <StyledProductContainer image={image}>
            {image && <img src={image} alt={description} width="100%" height="300px" />}
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
                    image={product.image}
                    description={product.description}
                />
            ))}
        </StyledShoppingList>
    );
};

export default ShoppingList;
