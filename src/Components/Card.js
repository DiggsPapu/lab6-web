import React from "react";
export const SingleCard = (value)=>{
    if (value.films.length === 0){
      value.films = "None"
    }
    if (value.shortFilms.length === 0){
      value.shortFilms = "None"
    }
    if (value.tvShows.length === 0){
      value.tvShows = "None"
    }
    if (value.videoGames.length === 0){
      value.videoGames = "None"
    }
    return(
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="card-back">
          <img style={{
            width: '200px',
            height: '200px'
          }} src = {value.imageUrl}/>
          <h1>{value.name}</h1>
          <ul>
            <li>{"Films:\n"+value.films}</li>
            <li>{"ShortFilms:\n"+value.shortFilms}</li>
            <li>{"TvShows:\n"+value.tvShows}</li> 
            <li>{"VideoGames:\n"+value.videoGames}</li>
          </ul>
          </div>
          <div className="card-front">
          <figure><img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" style={{
              width: "200px",
              height:"200px"
            }}></img></figure>
          </div>
        </div>
      </div>
    )
  }