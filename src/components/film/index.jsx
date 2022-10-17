import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "../routers"

const Films = () => {
    const navigate = useNavigate()
    const videoElement = useRef()

    const [isPlaying, setIsPlaying] = useState()
    useEffect(() => {
        if (isPlaying)
            videoElement.current.play()
        else
            videoElement.current.pause()
    }, [isPlaying])

    const ToBack = () => {
        navigate(ROUTER_NAMES.LOGIN)
    }


    return <div style={{background:" #024",height:"100vh"}}>
        <div className="G-space-between">
        <button className="G-button" onClick={() => setIsPlaying(v => !v)} >{isPlaying ? 'Pause' : 'Play'}</button>
        <button className="G-button P-blue" onClick={ToBack}>Back</button>

        </div>
      <div>
        <video ref={videoElement} width="100%" height="500px" controls={false}>
            <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        </video>
        </div>
    </div>

}
export default Films