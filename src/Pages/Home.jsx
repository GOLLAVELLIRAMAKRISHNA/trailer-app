import HomeCards from "../Components/HomeCards/HomeCards"
import Description from "../Components/Description/Description"
import Hero from "../Components/Hero/Hero"
import MovieSlider from "../Components/MovieSlider/MovieSlider"
import './css/Home.css'
import Download from "../Components/Download/Download"

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <MovieSlider from={11} to={24} title={"Latest Movies"} />
            <HomeCards from={0} to={12} title={"Movie Mirchi"} />
            <Description />
            <MovieSlider from={23} to={36} title={"Blockbusters"} />
            <HomeCards from={36} to={48} title={"Mostly Viewed"} />
            <Download />
        </div>
    )
}

export default Home