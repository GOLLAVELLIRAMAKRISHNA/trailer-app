import { useContext } from 'react'
import style from './HomeCards.module.css'
import { ContextStore } from '../../Context/ContextStore'
import Card from '../Card/Card'
import PropTypes from 'prop-types'

const HomeCards = ({ from, to, title }) => {

    const { all_Movies } = useContext(ContextStore)

    return (
        <div className={style.container}>
            <h1>{title}</h1>
            <div className={style.card_container}>
                {
                    all_Movies.map((item, i) => {
                        if (i >= from && i < to) {
                            return (
                                <Card key={i} item={item} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

HomeCards.propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    title: PropTypes.string
}

export default HomeCards