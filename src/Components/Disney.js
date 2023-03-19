import React, {useState} from "react";
import { UseFetch } from "./ConnectApi";
import { Cards } from "./Cards";
const Disney = () =>{
    const [url, setUrl] = useState("https://api.disneyapi.dev/characters")
    const state = UseFetch(url)
    const [loading, data] = state
    loading? console.log('Loading'):console.log(data.results)
    return(
        <div>
            {
                loading?
                <h1>Loading</h1>
                :
                <Cards datas={data.data}/>
            }
        </div>
    )
}

export default Disney