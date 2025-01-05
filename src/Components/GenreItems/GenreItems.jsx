import { useContext } from 'react'
import style from './GenreItems.module.css'
import { ContextStore } from '../../Context/ContextStore'

const GenreItems = () => {

    const { genre, setGenre } = useContext(ContextStore)

    return (
        <div className={style.genre_box}>
            <div className={genre === 'All' ? `${style.outline}` : ''} onClick={() => setGenre('All')}>All</div>
            <div className={genre === 'Drama' ? `${style.outline}` : ''} onClick={() => setGenre('Drama')}>Drama</div>
            <div className={genre === 'Action' ? `${style.outline}` : ''} onClick={() => setGenre('Action')}>Action</div>
            <div className={genre === 'Thriller' ? `${style.outline}` : ''} onClick={() => setGenre('Thriller')}>Thriller</div>
            <div className={genre === 'Sci-Fi' ? `${style.outline}` : ''} onClick={() => setGenre('Sci-Fi')}>Sci-Fi</div>
            <div className={genre === 'Comedy' ? `${style.outline}` : ''} onClick={() => setGenre('Comedy')}>Comedy</div>
            <div className={genre === 'Romance' ? `${style.outline}` : ''} onClick={() => setGenre('Romance')}>Romance</div>
            <div className={genre === 'Adventure' ? `${style.outline}` : ''} onClick={() => setGenre('Adventure')}>Adventure</div>
            <div className={genre === 'Fantasy' ? `${style.outline}` : ''} onClick={() => setGenre('Fantasy')}>Fantasy</div>
            <div className={genre === 'Family' ? `${style.outline}` : ''} onClick={() => setGenre('Family')}>Family</div>
            <div className={genre === 'Crime' ? `${style.outline}` : ''} onClick={() => setGenre('Crime')}>Crime</div>
            <div className={genre === 'Horror' ? `${style.outline}` : ''} onClick={() => setGenre('Horror')}>Horror</div>
            <div className={genre === 'Biography' ? `${style.outline}` : ''} onClick={() => setGenre('Biography')}>Biography</div>
            <div className={genre === 'War' ? `${style.outline}` : ''} onClick={() => setGenre('War')}>War</div>
            <div className={genre === 'Suspense' ? `${style.outline}` : ''} onClick={() => setGenre('Suspense')}>Suspense</div>
            <div className={genre === 'Mystery' ? `${style.outline}` : ''} onClick={() => setGenre('Mystery')}>Mystery</div>
            <div className={genre === 'History' ? `${style.outline}` : ''} onClick={() => setGenre('History')}>History</div>
        </div>
    )
}

export default GenreItems