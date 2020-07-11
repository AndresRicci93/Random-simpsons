import React, { useState, useEffect } from "react";
import "./Card.css";
import axios from "axios";
import { TwitterIcon, FacebookIcon } from "react-share";

const Card = () => {
  const [gif, setGif] = useState("");
  const [fetching, setFetching] = useState(false);

//   const share = () => {
//     const url = 'https://www.twitter.com?';
//     window.open(url, '_blank');
// }


  useEffect(() => {
    const fetchGif = async () => {

      const random = Math.floor(Math.random() * 20) + 1;

      const result = await axios(
        "https://api.giphy.com/v1/gifs/search?q=simpson&api_key=XBMgIm6dRevg70PAN4GRQzqB3hjG4coY"
      );
      //console.log(result.data.data[random].images.downsized_large.url);
      setGif(`${result.data.data[random].images.downsized_large.url}`);
    };
    fetchGif();
  }, [fetching]);

  return (
    <div className="main-card">
      {<img src={`${gif}`} alt="" width="450px" height="400px" />}
      <p onClick={() => setFetching(!fetching)}>Another gif!</p>
      <br></br>
      {/* <div className="share">
        
        
      <div class='item'>

        <TwitterIcon size={64} round={false} borderRadius={7} onClick={share}/>
        <a target="_blank" class="twitter-share-button" href={`https://twitter.com/intent/tweet?text=+${gif}`}>ads</a>
      </div>
       
      <div class='item'>

        <FacebookIcon size={64} round={false} borderRadius={7} />
      </div>
      </div>
      */}
    </div>
  );
};

export default Card;
