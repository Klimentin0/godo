import React from 'react';
import Main from "./Main.jsx";
import News from "./News.jsx";

export default function PageLayout({children}) {
    return (
        <div>
            <News />
            <Main>{children}</Main>
        </div>
    )

}
