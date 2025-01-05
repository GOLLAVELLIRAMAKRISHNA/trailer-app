import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Latest from './Pages/Latest'
import Year from './Pages/Year'
import About from './Pages/About'
import Trailer from './Pages/Trailer'
import Footer from './Components/Footer/Footer'
import Genres from './Pages/Genres'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/latest' element={<Latest />} />
        <Route path='/year' element={<Year />} />
        <Route path='/genres' element={<Genres />} />
        <Route path='/about' element={<About />} />
        <Route path='/trailers'>
          <Route path=':trailerId' element={<Trailer />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
