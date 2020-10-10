import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { ProductProps } from '../../services/type/product';

const StyledProductName = styled.div``;
const StyledProductPrice = styled.div``;
const StyledProductDescription = styled.div``;
const StyledProductContainer = styled.div<{ image: boolean }>`
    display: inline-block;
    cursor: pointer;
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

interface ProductItemProps extends ProductProps {
    openProductModal: () => void;
}
const ProductItem = (props: ProductItemProps) => {
    const { name, price, image, description, openProductModal } = props;

    return (
        <>
            <StyledProductContainer onClick={openProductModal} image={!!image}>
                {image && <img src={image} alt={description} width="100%" height="300px" />}
                <StyledProductName>{name}</StyledProductName>
                <StyledProductDescription>{description}</StyledProductDescription>
                <StyledProductPrice>{price} €</StyledProductPrice>
            </StyledProductContainer>
        </>
    );
};

export default ProductItem;
