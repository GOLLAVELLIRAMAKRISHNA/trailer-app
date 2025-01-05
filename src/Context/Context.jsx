import { ContextStore } from "./ContextStore"
import all_Movies from "../assets/allMovies"
import PropTypes from "prop-types"
import { useState } from "react"

const Context = ({ children }) => {

    const [duration, setDuration] = useState(0);
    const [year, setYear] = useState(0);
    const [genre, setGenre] = useState("All");

    const contextValues = {
        all_Movies,
        duration,
        setDuration,
        year,
        setYear,
        genre,
        setGenre
    }

    return (
        <ContextStore.Provider value={contextValues}>
            {children}
        </ContextStore.Provider>
    )
}

Context.propTypes = {
    children: PropTypes.any
}

export default Context