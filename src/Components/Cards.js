import { SingleCard } from "./Card";
import React from 'react';
export const Cards = ({ datas }) => {
      const [cards, setCards] = React.useState([]);
      React.useEffect(() => {
        setTimeout(() => {
          const shuffled_list = Shuffle(datas.values.data);
          const list = shuffled_list.map((value) => SingleCard(value));
          setCards(list);
        }, 1000);
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