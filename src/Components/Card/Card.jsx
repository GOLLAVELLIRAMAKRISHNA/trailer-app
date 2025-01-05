import PropTypes from 'prop-types'
import style from './Card.module.css'
import { Link } from 'react-router';

const Card = ({ item, releaseYear }) => {

    return (
        <div className={style.card}>
            <Link to={`/trailers/${item.id}`} onClick={() => window.scrollTo(0, 0)}>
                <img src={item.movieImageUrl} alt="" />
            </Link>
            <div className={style.card_body}>
                <p>{item.movieTitle}</p>
                {releaseYear ? <p className={style.year}>{releaseYear}</p> : <></>}
            </div>
        </div>
    )
}

Card.propTypes = {
    item: PropTypes.object,
    releaseYear: PropTypes.number
}

export default Card