import { Link } from 'react-router'
import style from './BreadCums.module.css'
import PropTypes from 'prop-types'

const BreadCums = ({ trailerName }) => {
    return (
        <div className={style.container}>
            <p><span><Link to='/'>Home</Link><i className="fa-solid fa-chevron-right"></i></span><span>Trailers<i className="fa-solid fa-chevron-right"></i></span><span>{trailerName}</span></p>
        </div>
    )
}

BreadCums.propTypes = {
    trailerName: PropTypes.string
}

export default BreadCums