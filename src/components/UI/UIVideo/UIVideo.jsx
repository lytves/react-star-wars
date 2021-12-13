import PropTypes from "prop-types";
import cn from 'classnames';

import styles from './UIVideo.module.css'
import '../index.css'
import {useEffect, useRef} from "react";

const UIVideo = ({
                     src,
                     playbackRate = 1.0,
                     clases
                 }) => {
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    }, [])
    return (
        <video
            loop
            autoPlay
            muted
            className={cn(styles.video, clases)}
            ref={videoRef}
        >
            <source src={src}/>
        </video>
    )
}

UIVideo.propTypes = {
    src: PropTypes.string,
    playbackRate: PropTypes.number,
    clases: PropTypes.string
}

export default UIVideo
