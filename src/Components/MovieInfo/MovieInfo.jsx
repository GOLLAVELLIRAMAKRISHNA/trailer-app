import PropTypes from 'prop-types'
import style from './MovieInfo.module.css'
import { useContext } from 'react'
import { ContextStore } from '../../Context/ContextStore'

const MovieInfo = ({ trailer }) => {

    const { duration } = useContext(ContextStore)

    return (
        <div className={style.container}>
            <div className={style.info_top}>
                <h2>{trailer.movieTitle} | Official Trailer | HDRip Telugu Watch Online Free</h2>
                <div>
                    <h3>{trailer.releaseYear}</h3>
                    <p className={style.special}>u/a 13+</p>
                    <p>{Math.abs(duration / 60).toFixed(2)}sec</p>
                    <p className={style.special}>hd</p>
                    <div className={style.lang}>
                        <p><i className='fa-solid fa-play'></i>Telugu</p>
                    </div>
                </div>
            </div>
            <div className={style.info_middle}>
                <ul className={style.icons}>
                    <li><i className="fa-solid fa-plus"></i><span>My List</span></li>
                    <li><i className="fa-regular fa-thumbs-up"></i><span>Like</span></li>
                    <li><i className="fa-regular fa-paper-plane"></i><span>Share</span></li>
                    <li><i className="fa-regular fa-flag"></i><span>Report</span></li>
                </ul>
                <p>{trailer.description}</p>
            </div>
            <div className={style.info_end}>
                <h2>more information</h2>
                <div className={style.moviedetail_container}>
                    <div className={style.row_info}>
                        <label>Movie</label>
                        <p>{trailer.movieTitle}</p>
                    </div>
                    <div className={style.row_info}>
                        <label>Cast</label>
                        <p>{trailer.heroName}, {trailer.heroinName}</p>
                    </div>
                    <div className={style.row_info}>
                        <label>Genres</label>
                        <p>{trailer.Genre}</p>
                    </div>
                    <div className={style.row_info}>
                        <label>Description</label>
                        <p>{trailer.description}</p>
                    </div>
                    <div className={style.row_info}>
                        <label>Release Year</label>
                        <p>{trailer.releaseYear}</p>
                    </div>
                    <div className={style.row_info}>
                        <label>IMBD Rating</label>
                        <p>{trailer.movieRating + 2.5}<i className="fa-solid fa-star"></i></p>
                    </div>
                    <div className={style.row_info}>
                        <label>Language</label>
                        <p>Telugu</p>
                    </div>
                    <div className={style.row_info}>
                        <label>Country</label>
                        <p>India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

MovieInfo.propTypes = {
    trailer: PropTypes.object
}

export default MovieInfo