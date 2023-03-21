import React from "react";
import { Card } from "./Components/Card";
import { useState } from "react";
import { useEffect } from "react";
import "./Components/Card.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://api.disneyapi.dev/characters?page=100")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: Shuffle(result.data),
            pairs:getPairs(this.state.items)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    console.log(this.state.items)
    const { error, isLoaded, items, pairs } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style = {{
          background: `url("https://media.disneylandparis.com/d4th/en-usd/images/n037009_2029mar16_world_30-anniversary-fireworks-castle_16-9_tcm1861-233244.jpg") no-repeat center fixed`,
        backgroundColor:'navy',
        width: '100%',
        height: '100%',
        display: 'grid',
        gridColumn: 'repeat(4,100px)',
        gridRow: 'repeat(10,100px)',
        backgroundSize: 'contain',
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: "auto auto auto auto auto",
            gridTemplateRows: "auto auto auto auto auto",
            backgroundSize: 'contain'
          }}>
            {items[0].map((item, index) => (
                <Card key={index} props= {item}/>
              ))}
          </div>        
      );
    }
  }
}
export function Shuffle(value){
        let vals = []
        let temp = value.slice()
        let arr = []
        // Select random from api
        for (let i = 0 ; i < 10 ; i++ ){
          let j = Math.floor(Math.random() * temp.length);
          if (!vals.includes(j)){
            arr[i]= temp[j];
            vals[vals.length] = j;
          }
          else{
            i--;
          }    
        }
        // Add pair
        let counter = 0;
        for (let i = 0 ; i < 10 ; i++ ){
          arr[i+10]= arr[counter];
          counter++;
         }
        //  shuffle
        let arr1 = arr.sort(function (){
          return Math.random()-0.5;
        })
        for (let k = 0 ; k < arr1.length ; k++ ){
          if (arr1[k]["films"].length === 0){
            arr1[k]["films"] = "None"
          }
          if (arr1[k]["shortFilms"].length === 0){
            arr1[k]["shortFilms"] = "None"
          }
          if (arr1[k]["tvShows"].length === 0){
            arr1[k]["tvShows"] = "None"
          }
          if (arr1[k]["videoGames"].length === 0){
            arr1[k]["videoGames"] = "None"
          }
          if (arr1[k]["name"].length === 0){
            arr1[k]["name"] = "None"
          }
          if (arr1[k]["imageUrl"].length === 0){
            arr1[k]["imageUrl"] = "None"
          }
        }
        
        return [arr1, getPairs(arr1)]
      }
export function getPairs(list){
  var list2 = list
  var indexes = []
  for (let k = 0 ; k < list2.length ; k++ ){
    for (let n = k+1; n < list2.length; n++){
      if (list2[k]["name"]===list2[n]["name"] && indexes.includes(k)===false){
        indexes[indexes.length] = [k,n]
      }
    }
  }
  return indexes;
}