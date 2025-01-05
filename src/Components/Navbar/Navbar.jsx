import { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router';

const Navbar = () => {

    const [theme, setTheme] = useState("dark");

    const handletheme = () => {
        theme === "dark" ? setTheme("sun") : setTheme("dark");
        window.document.body.classList.toggle('light')
    }
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.nav_left}>
                    <h1>
                        <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                            <i className="fa-solid fa-film"></i>
                            <p>TFI</p>
                        </Link>
                    </h1>
                </div>
                <ul className={styles.nav_center}>
                    <li><Link to='/' onClick={() => window.scrollTo(0, 0)}><i className="fa-solid fa-house"></i><label>Home</label></Link></li>
                    <li><Link to="/latest" onClick={() => window.scrollTo(0, 0)}><i className="fa-solid fa-book"></i><label>Latest</label></Link></li>
                    <li><Link to='/year' onClick={() => window.scrollTo(0, 0)}><i className="fa-solid fa-calendar-days"></i><label>By Year</label></Link></li>
                    <li><Link to='/genres' onClick={() => window.scrollTo(0, 0)}><i className="fa-solid fa-layer-group"></i><label>Genres</label></Link></li>
                    <li><Link to='/about' onClick={() => window.scrollTo(0, 0)}><i className="fa-solid fa-info"></i><label>About</label></Link></li>
                </ul>
                <div className={styles.nav_right}>
                    <div className={styles.search}>
                        <input type="text" placeholder='Search' />
                        <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div className={styles.theme_outline} onClick={handletheme}>
                        {theme === "dark" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar