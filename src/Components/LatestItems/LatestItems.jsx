import { useContext } from 'react'
import style from './LatestItems.module.css'
import { ContextStore } from '../../Context/ContextStore'
import Card from '../Card/Card'

const LatestItems = () => {

    const { all_Movies } = useContext(ContextStore)

    return (
        <div className={style.container}>
            {
                all_Movies.map((item, i) => {
                    if (item.releaseYear === 2024) {
                        return (
                            <Card releaseYear={item.releaseYear} key={i} item={item} />
                        )
                    }
                })
            }
        </div>
    )
}

export default LatestItems