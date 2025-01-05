import GenreCards from '../Components/GenreCards/GenreCards'
import GenreItems from '../Components/GenreItems/GenreItems'
import './css/Genres.css'

const Genres = () => {
  return (
    <div className="genre-container">
      <GenreItems />
      <GenreCards />
    </div>
  )
}

export default Genres