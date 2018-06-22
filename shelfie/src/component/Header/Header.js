import React from 'react';

import './Header.css'


function Header(props)
{
    return (
        <div className="header">
            <img src="./../../shelfie_icon.png" alt="icon"/>
           <h1>SHELFIE</h1>
        </div>
    );
}

export default Header;