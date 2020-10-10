import styled from '@emotion/styled';
import React from 'react';

const StyledModal = styled.div`
    position: fixed;
    z-index: 1; /* Sit on top */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.15);
    /* overflow: hidden; */
    border-radius: 5px;
    padding: 40px;
    background-color: white;
    box-sizing: border-box;
`;

const ProductModal = () => {
    return <StyledModal> Coucou from modal </StyledModal>;
};

export default ProductModal;
