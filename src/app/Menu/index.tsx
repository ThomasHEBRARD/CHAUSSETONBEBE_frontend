import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledMenu = styled.div`
    position: fixed;
    top: 0%;
    width: 100%;
    line-height: 50px;
    background-color: rgba(255,255,255,0.2);
    display: flex;
    justify-content: space-between;
`;

const Menu = () => {
    return (
        <StyledMenu>
            <Link to={'/homepage'}>Menu</Link>
            <Link to={'/shop'}>Shop</Link>
            <div>Connect</div>
        </StyledMenu>
    );
};

export default Menu;
