import { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types'
import style from './VideoPlayer.module.css'
import { ContextStore } from '../../Context/ContextStore';

const VideoPlayer = ({ trailer }) => {
    const videoRef = useRef()
    const [playStatus, setPlayStatus] = useState(false);
    const { setDuration } = useContext(ContextStore)

    useEffect(() => {
        setTimeout(() => {
            setDuration(videoRef.current.duration)
        }, 100)
    }, [setDuration])

    const playVideo = () => {
        if (!playStatus) {
            videoRef.current.play();
            setPlayStatus(true)
            videoRef.current.controls = true;
        }
        else {
            setPlayStatus(false)
            videoRef.current.pause();
            videoRef.current.controls = false;
        }
    }

    return (
        <div className={style.container}>
            <div className={style.videoContainer}>
                <video ref={videoRef}>
                    <source src={trailer.trailer} />
                </video>
            </div>
            <div className={playStatus ? `${style.controls} ${style.animateOpacity}` : style.controls}>
                <div className={style.side} onClick={() => { videoRef.current.currentTime -= 10 }}>
                    <i className='fa-solid fa-backward'></i>
                </div>
                <div onClick={playVideo}>
                    <i className={playStatus ? "fa-solid fa-pause" : "fa-solid fa-play"}></i>
                </div>
                <div className={style.side} onClick={() => { videoRef.current.currentTime += 10 }}>
                    <i className='fa-solid fa-forward'></i>
                </div>
            </div>
        </div >
    )
}

VideoPlayer.propTypes = {
    trailer: PropTypes.object
}

export default VideoPlayer