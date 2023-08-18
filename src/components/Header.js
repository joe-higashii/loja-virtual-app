import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            <div className="header_search">
                <input className='header_searchInput' type="text" name="" id="" />
                
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello
                    </span>
                    <span className="header_optionLineTwo">
                        Guest
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
            </div>
        </div>
    )
}