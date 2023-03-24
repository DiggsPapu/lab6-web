import { SingleCard } from "./Card/Card";
import { Card } from "./Card/Card";
import React from 'react';
import { Component } from "react";
import axios from 'axios';
export const Cards = ({ datas }) => {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      const shuffled_list = Shuffle(datas.values.data);
      const list = shuffled_list.map((value) => SingleCard(value));
      setCards(list);
    }, 2000);
  }, []);
  return (
    <div style = {{
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: "auto auto auto auto auto",
      gridTemplateRows: "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto",
      backgroundSize: 'contain'
    }}>
      {
      cards.map((card, index) =>
        <div key={index}>{card}</div>
      )}
    </div>
  );
};

    export class CardsComponent extends Component{
      constructor(){
        super();
        this.state ={
          error:null,
          isLoaded:false,
          datas: []
        }
      }
      componentDidMount(){
        fetch("https://api.disneyapi.dev/characters?page=50")
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            isLoaded:true,
            datas: data.data
          });
        });
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
        
      }
    render(){
      const { error, isLoaded, characters } = this.state;
      if(error){
        return <div>Error: {error.message}</div>
      }
      else if (!isLoaded){
        return <div>Loading...</div>;
      }
      else{
        return (
          <div style = {{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: "auto auto auto auto auto",
            gridTemplateRows: "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto",
            backgroundSize: 'contain'
          }}>
          {
            characters.map((character) => (
              console.log(character)
            ))
          }
          </div>
        );
      }
      
    }
  };
  export function ShuffleComponent(temp){
    let arr = []
    let vals = []
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
        return arr1
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
        return arr1
      }