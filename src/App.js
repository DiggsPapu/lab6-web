import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
// Public key 6992916dd45bd2af5b02b1e8ae33fb73
// Private key a150923d2e911e223edae62166edfee419045908
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
// 18/03/2023, 13:21:02a150923d2e911e223edae62166edfee4190459086992916dd45bd2af5b02b1e8ae33fb73
// hash 738cea2f374b3b032733f370770c74a8

// '18/03/2023, 13:21:02' 18/03/2023, 13:21:02
const getData = async()=>{
    fetch('http://gateway.marvel.com/v1/public/comics?ts=18/03/2023, 13:21:02&apikey=6992916dd45bd2af5b02b1e8ae33fb73&hash=b9c4435b7ff3377af0dfb90e9bff383d', {method: 'GET'})
    .then(response => response.json())
    .then(response => console.log(response.data.results))
}
  
// const getInfo = () =>{
//     const [posts, setPosts] = useState([]);
//    useEffect(() => {
//       fetch('https://go-apod.herokuapp.com/apod')
//          .then((response) => response.json())
//          .then((data) => {
//             console.log(data);
//             setPosts(data);
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//    }, []);
// }
const App = () => {
    useEffect(() => {
        // fetch('http://gateway.marvel.com/v1/public/comics?ts=18/03/2023, 13:21:02&apikey=6992916dd45bd2af5b02b1e8ae33fb73&hash=b9c4435b7ff3377af0dfb90e9bff383d', {method: 'GET'})
        // .then(response => response.json())
        // .then(response => console.log(response.data.results))
        fetch('https://api.disneyapi.dev/characters', {method: 'GET'}).then(response => response.json()).then(response => console.log(response.data))
       }, []);
  return (
    <div style={{
        background: `url("https://static.wikia.nocookie.net/4ef840a8-8212-48e9-8173-bed2d9501858") no-repeat center fixed`,
        width: '1280px',
        height: '630px',
        display: 'grid',
        gridColumn: 'repeat(4,100px)',
        gridRow: 'repeat(10,100px)',
        border: '2px solid yellow',
        backgroundSize: 'contain'
    }}>
        <img 
        style={{
            gridArea: '0/0/1/1'
            
        }}
        src = 'https://www.citypng.com/public/uploads/preview/dragon-ball-z-budokai-tenkaichi-3-logo-hd-png-11664328047dtxztxwsew.png'
        >
            
        </img>
        
    </div>
  );
};

export default App;