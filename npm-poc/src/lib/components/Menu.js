import React from 'react';
import MenuItem from './MenuItem';
const Menu = ({ pages }) => {
    var navStyle = {
        display: 'block',
        width: '100%'
    };
    return (
        <nav style={navStyle} >
            {pages.map((page) => {
                return <MenuItem title={page.name} link={page.link }icon={page.icon} />
            })}
        </nav>
    )
}
export default Menu;