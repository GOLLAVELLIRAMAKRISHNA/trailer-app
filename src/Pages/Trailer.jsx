import { useContext } from 'react'
import BreadCums from '../Components/BreadCums/BreadCums'
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer'
import './css/Trailer.css'
import { ContextStore } from '../Context/ContextStore'
import { useParams } from 'react-router'
import MovieInfo from '../Components/MovieInfo/MovieInfo'

const Trailer = () => {

  const { all_Movies } = useContext(ContextStore)
  const { trailerId } = useParams()
  const trailer = all_Movies.find((e) => e.id === Number(trailerId))

  return (
    <div className='container'>
      <BreadCums trailerName={trailer.movieTitle} />
      <VideoPlayer trailer={trailer} />
      <MovieInfo trailer={trailer}/>
    </div>
  )
}

export default Trailer