import React from 'react';

export default function MainContent({children}) {
    return (
        <div className="main-content">
            <div>{children}</div>
        </div>
    )
}
