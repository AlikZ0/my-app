import React from "react";
import './style.css'
import ss from "../assets/FeaturedCoverImage.png"
import Search from "../assets/icons/ICON - Search.png"
import homes from "../assets/icons/Group 46.png"
import videos from "../assets/icons/Group 56.png"
import video from "../assets/icons/Group 54.png"
import mask from "../assets/icons/Group 53.png"
import store from "../assets/icons/Group 47.png"
const Menu = () => {
    return <div className="G-Menu ">
   <div className=" On-hover">

   
   <div className=" P-flex On-hover">
    <img className="Avatar" src="https://miro.medium.com/max/566/1*n-FPAObgPCDmxNKeGqyWvw.jpeg" alt="Avatar" />
     <p className="P-text">Name</p>
   </div>
   <div className="P-flex On-hover">
    <img className="Iconsi" src={Search} alt="#" />
    <h2 className="P-text">Search</h2>
   </div>
   <div className="P-flex" style={{transform:" scale(1.25)"}}>
    <img className="Iconsi" src={homes} alt="#" />
    <h2 className="P-text">Home</h2>
   </div>
   <div className="P-flex">
    <img className="Iconsi" src={videos} alt="#" />
    <h2 className="P-text">TV Shows</h2>
   </div>
   <div className="P-flex">
    <img className="Iconsi" src={video} alt="#" />
    <h2 className="P-text">Movies</h2>
   </div>
   <div className="P-flex">
    <img className="Iconsi" src={mask} alt="#" />
    <h2 className="P-text">Genres</h2>
   </div>
   <div className="P-flex">
    <img className="Iconsi"  src={store} alt="#" />
    <h2 className="P-text">Watch Later</h2>
   </div>
   <div className="Local nen ">
    <button style={{marginTop:"30px",}}>LANGUAGE</button>
    <button>GET HELP</button>
    <button>EXIT</button>
   </div>
   </div>
    </div>
}
export default Menu