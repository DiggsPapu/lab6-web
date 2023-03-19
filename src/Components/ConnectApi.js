import React, {useState, useEffect} from "react";

export const UseFetch = (url) =>{
    const [data, setData]=useState({loading:true, data:null})
    useEffect(() =>{
        getData(url)
    },[url])
    async function getData(url){
        try {
            setResult({loading:true, data:null})
            const response = await fetch(url)
            const values = await response.json()
            setResult({loading:false, values})
        } catch (e) {
            console.log("Couldn't connect with api")
            
        }
    }
    return data
}