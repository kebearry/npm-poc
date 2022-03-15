import React from 'react';
const MenuItem = ({ title, icon, link }) => {
    var menuItemStyle = {
        display: 'block',
        padding: '10px',
        color: '#fdfdfd',
        borderBottom: '1px solid rgb(35, 50, 66)'
    };

    var iconStyle = {
        marginRight: '10px'
    }

    return (
        <a href={link} style={menuItemStyle}>
            <i className={'fa fa-fw fa-' + icon} style={iconStyle}></i>
            {title}
        </a>
    )
}
export default MenuItem;