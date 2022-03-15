import React from 'react';
const Sidebar = ({ children }) => {

    return (
        <div className="sidebar col-md-3">
            {children}
        </div>
    )
}

export default Sidebar;