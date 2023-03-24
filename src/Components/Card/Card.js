import React from "react";
import "./Card.css";
const Card = ({name, films, shortFilms, tvShows, videoGames, img, visible, finished, onClick }) =>{
    return (
        <span className="card" onClick={onClick}>
        {
            visible||finished?
            <div className='card-front'>
            <img src={img}></img>
            <h1>{name}</h1>
            <ul>
                <li>Films:{films}</li>
                <li>Shortfilms: {shortFilms}</li>
                <li>TvShows:{tvShows}</li>
                <li>VideoGames:{videoGames}</li>
            </ul>
            </div>
            :
            <div className='card-back'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg'></img>
            </div>
        }
        </span>
    )
}
export default Card