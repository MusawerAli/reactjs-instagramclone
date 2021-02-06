import React,{useState,useEffect} from 'react'
import './Banner.css';
import axios from './axios';
import requests from './Request';

function Banner() {
    const [movie,setMovie] = useState([]);


    function truncate(string,n){
        return string?.length>n?string.substr(0,n-1)+'...': string;
    }

    //fetch movies from apis
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request.data.results[1]);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    console.log(movie);


    return (
        <header className="banner" style={
          {  backgroundSize:"cover",
            
            backgroundPosition:"center center",
              backgroundImage:`url("https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}")`
              
            }
        }>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.name || movie?.title || movie?.orignal_name}</h1>
                <div className="banner_butons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
            </div>

            
                <h1 className="banner_description">{truncate(movie?.overview,100)}</h1>
            

            <div className="banner_fadeButton"/>

        </header>
    )
}

export default Banner
