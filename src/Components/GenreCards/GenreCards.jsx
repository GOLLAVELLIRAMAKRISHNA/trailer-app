import { useContext } from 'react'
import style from './GenreCards.module.css'
import { ContextStore } from '../../Context/ContextStore'
import Card from '../Card/Card'

const GenreCards = () => {

    const { all_Movies, genre } = useContext(ContextStore);

    return (
        <div className={style.container}>
            {
                all_Movies.map((item, i) => {
                    if (item.Genre.includes(genre)) {
                        return (
                            <Card key={i} item={item} releaseYear={item.releaseYear} />
                        )
                    }
                    if (genre === 'All') {
                        return (
                            <Card key={i} item={item} releaseYear={item.releaseYear} />
                        )
                    }
                })
            }
        </div>
    )
}

export default GenreCards