import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ReactSimplyCarousel from 'react-simply-carousel'
import a from "../assets/https_specials-1.png"
import b from "../assets/https_specials-2.png"
import c from "../assets/https_specials-3.png"
import d from "../assets/https_specials-4.png"
import e from "../assets/https_specials-5.png"
import f from "../assets/https_specials-6.png"
import k from "../assets/https_specials-7.png"
import z from "../assets/https_specials-8.png"
import { Film } from "../state/film";
import { profileActions } from "../state/film/actions";
const
    SlideShow = () => {
        const dispatch = useDispatch()
        const handleChange = (e) => {
            console.log(e);
            dispatch({ type: profileActions.MANAGE_LIST_INFO, payload:e })
        
          }
        const Img=[a,b,c,d,e,f,k,z, b,c,d,e,f,k,z,]
        // const videoElement = useRef()

        // const [isPlaying, setIsPlaying] = useState()
        // useEffect(() => {
        //     if (isPlaying)
        //         videoElement.current.play()
        //     else
        //         videoElement.current.pause()
        // }, [isPlaying])
        // return <div style={{ background: "" }}>
        //     <img className="SlideSow" src={a} alt="" />
        //     <img className="SlideSow" src={b} alt="" />
        //     <img className="SlideSow" src={c} alt="" />
        //     <img className="SlideSow" src={d} alt="" />
        //     <img className="SlideSow" src={e} alt="" />
        //     <img className="SlideSow" src={f} alt="" />
        //     <img className="SlideSow" src={k} alt="" />
        //     <img className="SlideSow" src={z} alt="" />
        //     <div>
        //         <button onClick={() => setIsPlaying(v => !v)} >{isPlaying ? 'pause' : 'play'}</button>
        //         <video ref={videoElement} width="750px" height="500px" controls={false}>
        //             <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        //         </video>
        //     </div>
        // </div>
        const [activeSlideIndex, setActiveSlideIndex] = useState(0);

        return (
          <div>
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              forwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  alignSelf: 'center',
                  background: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '20px',
                  height: 30,
                  lineHeight: 1,
                  textAlign: 'center',
                  width: 30,
                },
                children: <span>{`>`}</span>,
              }}
              backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  alignSelf: 'center',
                  background: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '20px',
                  height: 30,
                  lineHeight: 1,
                  textAlign: 'center',
                  width: 30,
                },
                children: <span>{`<`}</span>,
              }}
              responsiveProps={[
                {
                  itemsToShow: 7,
                  itemsToScroll: 2,
                //   minWidth: 135,
                },
              ]}
              speed={400}
              easing="linear"
            >
              {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                   {/* <img className="SlideSow" src={a} alt="" />
            <img className="SlideSow" src={b} alt="" />
            <img className="SlideSow" src={c} alt="" />
            <img className="SlideSow" src={d} alt="" />
            <img className="SlideSow" src={e} alt="" />
            <img className="SlideSow" src={f} alt="" />
           <img className="SlideSow" src={k} alt="" />
            <img className="SlideSow" src={z} alt="" />
            <img className="SlideSow" src={e} alt="" />
            <img className="SlideSow" src={f} alt="" />
           <img className="SlideSow" src={k} alt="" />
            <img className="SlideSow" src={z} alt="" /> */}
            {Img.map((el,index)=>{
                return <div  key={index}onClick={(e)=>{handleChange(index)}}>
                     <img className="SlideSow" src={el} alt="#" />

                </div>
            })}
            </ReactSimplyCarousel>
          </div>
        );
          }



export default SlideShow