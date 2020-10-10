import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledMenu = styled.div`
    position: fixed;
    top: 0%;
    width: 100%;
    line-height: 70px;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    padding-right: 500px;
    justify-content: space-around;
`;

const StyledButtonMenu = styled(Link)`
    text-decoration: none;
    color: #3f3f3f;
    font-weight: 400;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-family: Lora, georgia, serif;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
`;

const StyledSeparationBar = styled.div`
    margin-top: 80px;
    width: 90%;
    margin-left: 5%;
    height: 1px;
    background-color: grey;
`;

const Menu = () => {
    return (
        <>
            <StyledMenu>
                <StyledButtonMenu to={'/homepage'}>Menu</StyledButtonMenu>
                <StyledButtonMenu to={'/shop'}>Shop</StyledButtonMenu>
            </StyledMenu>
            <StyledSeparationBar />
        </>
    );
};

export default Menu;
