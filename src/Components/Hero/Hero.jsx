import { useContext, useEffect, useState } from 'react';
import style from './Hero.module.css'
import { ContextStore } from '../../Context/ContextStore';
import CaroselItem from '../CaroselItem/CaroselItem';

const Hero = () => {

  const { all_Movies } = useContext(ContextStore);
  const [caroselItem, setCaroselItem] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (caroselItem > 3) {
        setCaroselItem(0);
      }
      else {
        setCaroselItem(caroselItem + 1);
      }
    }, 5000)
  }, [caroselItem])

  return (
    <div className={style.container}>
      {
        all_Movies.map((item, i) => {
          if (i === caroselItem) {
            return (
              <CaroselItem key={i} item={item} />
            )
          }
        })
      }
    </div>
  )

}

export default Hero