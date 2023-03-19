import React from "react";
import { UseFetch } from "./ConnectApi";
export const Card = ({url}) =>{
    const state = UseFetch(url)
    const [loading, data] = state
    return(
        <div>
            {
                loading?
                <h1>Loading</h1>
                :
                <div>
                    <h1>{data.name}</h1>
                    <div>
                        <img src = {data.imageUrl} alt = 'Disney character'></img>
                    </div>
                </div>
            }
        </div>
    )
}