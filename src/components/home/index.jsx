import React, { useState,useEffect } from "react";
import data from "../data.json"
import './style.css'
import ss from "../assets/FeaturedCoverImage.png"
import Search from "../assets/icons/ICON - Search.png"
import homes from "../assets/icons/Group 46.png"
import videos from "../assets/icons/Group 56.png"
import video from "../assets/icons/Group 54.png"
import mask from "../assets/icons/Group 53.png"
import store from "../assets/icons/Group 47.png"
import SlideShow from "../slideShow";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "../routers"
import Menu from "../menu";
import {  useSelector } from "react-redux";

const Homes = () => {
    const navigate = useNavigate()
    const profile = useSelector(state => state.film.film)
   const GoToFilm=()=>{
    navigate(ROUTER_NAMES.FILM)
   }
 const [get,set]=useState()
 useEffect(()=>{
    if (!profile&&profile!==0) {
       set(data.Featured) 
    }else{
   set(data.TendingNow[profile])
    }
 // setv(data.TendingNow[profile].TitleImage)
 },[profile])
console.log(profile);

    return <div className="G-img" style={{ backgroundImage: `url(${ss})`, width: "100%", height: "105vh" }}>
        <div className="G-flex">
            {/* <div className="G-icons" >
           
                <img className="Iconsi src={Search} alt="*" style={{ width: "25px", height: "25px" }} />
                <img className="Iconsi src={homes} alt="*" style={{ width: "25px", height: "25px" }} />
                <img className="Iconsi src={videos} alt="*" style={{ width: "25px", height: "25px" }} />
                <img className="Iconsi src={video} alt="*" style={{ width: "25px", height: "25px" }} />
                <img className="Iconsi src={mask} alt="*" style={{ width: "25px", height: "25px" }} />
                <img className="Iconsi src={store} alt="*" style={{ width: "25px", height: "25px" }} />


                
            </div> */}
            
            <Menu/>
           { get? <div className="G-icons">
                <h3 style={{color:"gray",marginTop:"10%"}}> {get.Category}</h3>
                <h1 style={{fontSize:"68px"}}>{get.Title}</h1>

                <div className="G-local">
                    <p>{get.ReleaseYear}</p>
                    <p>{get.MpaRating}</p>
                    <p>{Math.floor(get.Duration/3600)}h </p>
                    <p>{Math.floor(get.Duration/60-Math.floor(get.Duration/3600)*60)}m</p>
                </div>
                <div className="">
                    <p style={{padding:"11px"}}>{get.Description}</p>
                </div>
                <div className="G-flex">
                    <button className="G-button" onClick={GoToFilm}>Play</button>
                    <button className="G-button P-blue">More Info</button>

                </div>

                <div style={{marginTop:"140px"}}>
                Trending Now
                <SlideShow/>
                </div>
             </div>:""}
           
           
        </div>
    </div>
}
export default Homes