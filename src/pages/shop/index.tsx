import React, { useState, useEffect } from 'react';
import shopClient from '../../services/api/shop_client';
import { ProductProps } from '../../services/type/product';
import styled from '@emotion/styled';
import Modal from '../../components/Modal';
import ProductItem from './ProductItem';
import ProductModal from './ProductModal';

const StyledShoppingList = styled.div`
    margin: 0 3% 0 3%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-row-gap: 50px;
    opacity: 1;
    grid-column-gap: 5%;
`;

const ShoppingList = () => {
    const [data, setData] = useState<any>();

    const fetchData = async () => {
        setData(await shopClient.getProducts());
    };

    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <StyledShoppingList>
                {data?.results?.map((product: ProductProps) => (
                    <ProductItem
                        key={product.code}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                        openProductModal={() => setIsOpenModal(true)}
                    />
                ))}
            </StyledShoppingList>
            <Modal isOpen={isOpenModal} closeModal={() => setIsOpenModal(false)} closeOnSpace>
                <ProductModal />
            </Modal>
        </>
    );
};

export default ShoppingList;
