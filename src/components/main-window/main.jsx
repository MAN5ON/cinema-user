import React from 'react'
import css from './main.module.css'
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Opros from "../opros/opros";

const Main = () => {
    return (
        <div className={css.main}>
            <BrowserRouter>
                <p> Пройдите <NavLink to='/opros' activeClassName={css.open}>опрос</NavLink> для лучшей работы
                    рекомендаций!</p>
                <Route path='/opros' render={() => <Opros/>}/>
                <h2>RECOMENDATIONS:</h2>
                <div className={css.films}>
                    <a className={css.one} href='https://hd.kinopoisk.ru/film/47649cf90de74aca8da7eb5b17fc8a8a?watch='>
                        <img
                            src='https://media.gq.ru/photos/5e4fd5b14eb0aa0009ba53e1/16:9/w_1920,c_limit/0.jpg'/>
                        <p>Джентельмены(2019) Рейтинг: 8.5</p></a>
                    <a className={css.two}
                       href='https://hd.kinopoisk.ru/?episode=1&rt=4fe23535fd81fe708268cd0e32565388&season=1&watch='>
                        <img
                            src='https://image.tmdb.org/t/p/original/bu3u1glKpcEUchqIXklxO2C3T1e.jpg'/>
                        <p>Офис(2005-2013) Рейтинг: 8.3</p>
                    </a>
                    <a className={css.three} href='https://hd.kinopoisk.ru/buy?rt=49b1e56630d3dd45bd2befd5a866c5bf'>
                        <img
                            src='https://www.mirf.ru/wp-content/uploads/2020/05/TENET_VERT_TSR_DOM_2764x4096_master-1920x1080-1.jpg'/>
                        <p>Довод(2020) Рейтинг: 7.6</p></a>
                    <a className={css.four}
                       href='https://hd.kinopoisk.ru/?episode=6&rt=42be2adae091f64aadb3bbf449285242&season=1&watch='>
                        <img
                            src='http://getwallpapers.com/wallpaper/full/8/f/f/930446-new-funny-south-park-wallpapers-1920x1080.jpg'/>
                        <p>Южный
                            парк(1997-2021) Рейтинг: 8.1</p></a>
                    <a className={css.five}
                       href='https://hd.kinopoisk.ru/selection/personal_films?rt=4508c727798ae209b6f18f57c04ec865&selectionWindowId=ya_plus&watch='>
                        <img src='https://bigrating.ru/wp-content/uploads/2020/10/marsianin.jpg'/><p>Марсианин(2015) Рейтинг: 7.7</p>
                    </a>
                    <a className={css.six}
                       href='https://hd.kinopoisk.ru/selection/personal_films?rt=48dbbe01d83c30229e6e43c330daf81c&selectionWindowId=ya_plus&watch='>
                        <img
                            src='http://cdn.wallpapername.com/1920x1080/20121025/the%20road%20viggo%20mortensen%20hooded%201920x1080%20wallpaper_www.wallpapername.com_52.jpg'/>
                        <p>Дорога(2009) Рейтинг: 7.2</p></a>
                </div>
                <button className={css.see_more}>See more...</button>
            </BrowserRouter>
        </div>
    )
};

export default Main;