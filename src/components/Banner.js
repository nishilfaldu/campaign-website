import React from "react";
import "../css/Banner.css";

function Banner() {

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
         style={{
            backgroundSize: "cover",
             backgroundImage: `url(
              "https://storage.googleapis.com/campaign-website/assets/banner_video.mp4"
         )`,
        backgroundPosition: "center center",
      }}
    >
         <div className="banner__contents">
             <h1 className="banner__title">
           {`Baddam & Lukose 2022`} 
             </h1>
            
         <div className="banner__buttons">
           {/* <button className="banner__button">Play</button> */}
           <a href="https://campuslink.uc.edu/submitter/election/start/528893" target="_blank" rel="noreferrer">
           <button className="banner__button">Vote</button>
           </a>
           <a href="https://www.instagram.com/baddamlukose/" target="_blank" rel="noreferrer">
           <button className="banner__button">Instagram</button>
           </a>
           <a href="https://vm.tiktok.com/TTPdBgUmso/" target="_blank" rel="noreferrer">
           {/* <button className="banner__button">TikTok</button> */}
           </a>
         </div>

         <h1 className="banner__description">
           {truncate(`Hey Bearcats!`, 500)}
           <br></br>
           {truncate(`We’re the Baddam&Lukose slate! We are incredibly excited about running to be your next Undergraduate Student Body President & Vice - President at the University of Cincinnati! Here's our vision of UC in the next few years and our dream of making the University of Cincinnati the place everybody wants to be at, the place everyone loves, and the place which empowers everyone who’s a part of it!`, 500)}
         </h1>
       </div>

       <div className="banner--fadeBottom" />
     </header>
    );
}

export default Banner