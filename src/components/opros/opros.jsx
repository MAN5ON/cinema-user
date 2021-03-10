import css from './opros.module.css'
import react from 'react'

const Opros = () => {
    return (
        <div>
            <ul>
                <li><h3>Жанры:</h3></li>
                <button className={css.item}>Комедия</button>
                <button className={css.item}>Юмор</button>
                <button className={css.item}>Романтика</button>
                <button className={css.item}>Хоррор</button>
                <button className={css.item}>Экшн</button>
                <button className={css.see_more}>See more...</button>
                <li><h3>Режиссёры:</h3></li>
                <button className={css.item}>Квентин Тарантино</button>
                <button className={css.item}>Мартин Скорсезе</button>
                <button className={css.item}>Юрий Быков</button>
                <button className={css.item}>Джеймс Кэмерон</button>
                <button className={css.item}>Никита Михалков</button>
                <button className={css.see_more}>See more...</button>
                <li><h3>Студии:</h3></li>
                <button className={css.item}>Marvel</button>
                <button className={css.item}>ТРИТЭ</button>
                <button className={css.item}>Warner Brothers</button>
                <button className={css.item}>Disney</button>
                <button className={css.item}>Metro Goldwyn Mayer</button>
                <button className={css.see_more}>See more...</button>
                <li><h3>Фильмы:</h3></li>
                <button className={css.item}>Залечь на дно в Брюгге</button>
                <button className={css.item}>Вверх!</button>
                <button className={css.item}>Карты деньги два ствола</button>
                <button className={css.item}>Сумерки</button>
                <button className={css.item}>Завод</button>
                <button className={css.see_more}>See more...</button>
                <li>
                    <button className={css.see_more}>See more...</button>
                </li>
                <li><a href='http://localhost:3000/'>
                    <button>OK</button>
                </a></li>
            </ul>

        </div>
    )
};

export default Opros;