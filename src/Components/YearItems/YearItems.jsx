import { useContext } from 'react'
import style from './YearItems.module.css'
import { ContextStore } from '../../Context/ContextStore'
import Card from '../Card/Card'

const YearItems = () => {

    const { year, setYear, all_Movies } = useContext(ContextStore)

    console.log(year);

    return (
        <div className={style.container}>
            <div className={style.years_box}>
                <div className={year === 0 ? `${style.outline}` : ''} onClick={() => setYear(0)}>All</div>
                <div className={year === 2022 ? `${style.outline}` : ''} onClick={() => setYear(2022)}>2022</div>
                <div className={year === 2023 ? `${style.outline}` : ''} onClick={() => setYear(2023)}>2023</div>
                <div className={year === 2024 ? `${style.outline}` : ''} onClick={() => setYear(2024)}>2024</div>
            </div>
            <div className={style.year_items_container}>
                {
                    all_Movies.map((item, i) => {
                        console.log(item.releaseYear);
                        if (year === item.releaseYear) {
                            return (
                                <Card key={i} item={item} releaseYear={item.releaseYear} />
                            )
                        }
                        if (year === 0) {
                            return (
                                <Card key={i} item={item} releaseYear={item.releaseYear} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default YearItems