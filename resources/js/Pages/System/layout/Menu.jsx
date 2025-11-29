import React from 'react';
import {Link} from "@inertiajs/react";

export default function Menu() {
    return (
        <ul className="menu-list">
            <a>Главная</a>
            <Link href="/system/info">Инфо</Link>
            <a>Тест</a>
        </ul>
    )
}
