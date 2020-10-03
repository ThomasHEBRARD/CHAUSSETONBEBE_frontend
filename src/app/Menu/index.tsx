import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to={'/homepage'}>Menu</Link>
            <Link to={'/shop'}>Shop</Link>
            <div>Connect</div>
        </div>
    );
};

export default Menu;
