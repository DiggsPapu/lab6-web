import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Components/Card.css";
import { Cards } from "./Components/Cards";
const UseFetch = (url) =>{
    var [data] = useState({values:null})
    useEffect(() =>{
        getData(url)
    },[url])
    async function getData(url){
        try {
            const response = await fetch(url)
            const values = await response.json()
            data.values = values
        } catch (e) {
            console.log("Couldn't connect with api")
            
        }
    }
    return data
}
const App = () => {
    // var lis
    const [url] = useState("https://api.disneyapi.dev/characters")
    console.log(url)
    var values = UseFetch(url)
    const [data] = useState(values)
  return (
    <div style={{
        background: `url("https://media.disneylandparis.com/d4th/en-usd/images/n037009_2029mar16_world_30-anniversary-fireworks-castle_16-9_tcm1861-233244.jpg") no-repeat center fixed`,
        backgroundColor:'navy',
        width: '100%',
        height: '100%',
        display: 'grid',
        gridColumn: 'repeat(4,100px)',
        gridRow: 'repeat(10,100px)',
        backgroundSize: 'contain'
    }}>
        <Cards datas={data}/>      
    </div>
  );
};

export default App;