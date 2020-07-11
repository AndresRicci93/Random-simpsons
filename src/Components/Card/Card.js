import React, {useState,useEffect} from "react";
import './Card.css'
import axios from 'axios'
const Card = () => {

    const [gif, setGif] = useState('');
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        const fetchGif = async () => {

          const random =  Math.floor(Math.random() * 20) + 1;

            const result = await axios("http://api.giphy.com/v1/gifs/search?q=simpson&api_key=XBMgIm6dRevg70PAN4GRQzqB3hjG4coY")
            //console.log(result.data.data[random].images.downsized_large.url);
            setGif(`${result.data.data[random].images.downsized_large.url}`)
        }
        fetchGif();
    },[fetching]);


  return (
    
    <div className="main-card">
      {( 
        
        <img src={`${gif}`} alt="" width="450px" height="400px"/>
      
      )}
      <p onClick={() => setFetching(!fetching)}>Another gif!</p>
    </div>
  );
};

export default Card;
