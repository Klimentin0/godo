import React from 'react';
import Menu from "./Menu.jsx";
import MainContent from "./MainContent.jsx";

export default function Main({children}) {
    return (
        <div className="main-sector">
            <div className="navContainer">
                <a href="/">
                    <img src="https://spb.godege.ru/wp-content/themes/regions-godege/img/logoFooterNew.png"
                         alt="УЦ Годограф" width="34" height="34"/>
                </a>
                <Menu/>
            </div>
            <MainContent>{children}</MainContent>
        </div>
    )
}
