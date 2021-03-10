import React from 'react'
import css from './header.module.css'

const Header = () => {
    return (
        <div className={css.head}>
            <ul>
                <li className={css.p}>Renat Bikmukhamedov</li>
                <li><button className={css.q}>Quit</button></li>
                <li><input placeholder='ПРОМОКОД' className={css.pro}/></li>
                <li><button className={css.promo}>Enter</button></li>
            </ul>
        </div>
    )
};

export default Header;