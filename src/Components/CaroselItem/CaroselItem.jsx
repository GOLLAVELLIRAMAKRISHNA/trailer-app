import style from './CaroselItem.module.css'
import PropTypes from 'prop-types'

const CaroselItem = ({ item }) => {
    return (
        <div className={style.innercontainer}>
            <img src={item.thumbnail} alt="" />
            <div className={style.itemDetails}>
                <h1>{item.movieTitle}</h1>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

CaroselItem.propTypes = {
    item: PropTypes.object
}

export default CaroselItem