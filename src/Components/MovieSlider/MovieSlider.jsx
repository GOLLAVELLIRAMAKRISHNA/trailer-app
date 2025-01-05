import { useContext } from 'react'
import style from './MovieSlider.module.css'
import { ContextStore } from '../../Context/ContextStore'
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const MovieSlider = ({ from, to, title }) => {

    const { all_Movies } = useContext(ContextStore);

    return (
        <div className={style.container}>
            <h1>{title}</h1>
            <div className={style.item_container}>
                {
                    all_Movies.map((item, i) => {
                        if (i > from && i < to) {
                            return (
                                <div key={i} className={style.item_box}>
                                    <Link to={`trailers/${item.id}`} onClick={() => window.scrollTo(0, 0)} ><img src={item.movieImageUrl} alt="" /></Link>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

MovieSlider.propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    title: PropTypes.string
}

export default MovieSlider