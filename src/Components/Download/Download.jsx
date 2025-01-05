import style from './Download.module.css'

const Download = () => {
    return (
        <div className={style.container}>
            <span>Bookmark Our Main Site for Latest APP and PC Site Related Updates (New Site Available For Computer Users, Go and Check it).</span>
            <p>Developed for smartphone, tablets, PC & TV.</p>
            <div className={style.btns}>
                <button>
                    <i className="fa-brands fa-google-play"></i>
                    <div>
                        <span>Download APK</span>
                        <p>Android App</p>
                    </div>
                </button>
                <button>
                    <i className="fa-brands fa-apple"></i>
                    <div>
                        <span>Make on browser</span>
                        <p>IOS App</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Download