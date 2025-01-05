import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.container}>
            <h3>Powered by TFI</h3>
            <p>All of the free trailers found on this website are hosted on third-party servers that are freely available to watch online for all internet users.</p>
            <p>Any legal issues regarding the free online movies on this website should be taken up with the actual file hosts themselves, as we&apos;re not affiliated with them.</p>
            <div>
                <span>Contact DMCA T&C</span>
                <span>© 2025 BAPPAM</span>
            </div>
        </div>
    )
}

export default Footer