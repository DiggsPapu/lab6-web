import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FlipableCard from "./Components/flipping-card";
import {CSSTransition} from 'react-transition-group';
import "./Components/Card.css"

// const Cards = ({datas}) =>{
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       const newList = datas.values.data.map((value) => (
//         <Card name={value.name} img={value.imageUrl} />
//       ));
//       setList(newList);
//     }, 1000);
//   }, []);

//   return <ul id="list-li">{list}</ul>;
// }
// const Cards = ({datas}) =>{
//     console.log(datas)
//     return (
//         <div>
//            <ul id="list-li">
//             {
//                 setTimeout(() => {
//                     const list = datas.values.data.map((value) =>(
//                         <Card name={value.name} img = {value.imageUrl}/>
//                     ))
                    
//                 }, 1000)
//             }
//             </ul> 
//         </div>
//     )
// }

// const Cards = ({ datas }) => {
//     const [cards, setCards] = React.useState([]); // create state to hold the cards
  
//     React.useEffect(() => {
//       setTimeout(() => {
//         const list = datas.values.data.map((value) => (
//           <Card name={value.name} img={value.imageUrl} />
//         ));
//         setCards(list); // set the state with the list of cards
//       }, 1000);
//     }, [datas.values.data]); // add datas.values.data as dependency to the useEffect
  
//     return (
//       <div>
//         <ul id="list-li">{cards}</ul> {/* render the cards state */}
//       </div>
//     );
//   };
function Card(value){
  return(
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="card-front"> 
        
        <img src = {value.imageUrl}/>
          <h1>{value.name}</h1>
          
        </div>
        <div className="card-back">
        <h1>Disney</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>  
        </div>
      </div>
    </div>
  )
}
function Shuffle(value){
  let temp = value.slice()
  let temp2 = value.slice()
  let arr = []
  temp2.length = temp2.length*2
  // console.log("\nTemp1:"+temp.length+"\nTemp2:"+temp2.length)
  // for (let i = 0 ; i < 20; i++){
  //   let j = Math.floor(Math.random() * (i + 1));
  //   [temp[i], arr[j]] = [temp[j], temp[i]];
  // }
  for (let i = 0 ; i < 10 ; i++ ){
    let j = Math.floor(Math.random() * temp.length);
    arr[i]= temp[j]
  }
  let counter = 0;
  for (let i = 0 ; i < 10 ; i++ ){
    arr[i+25]= arr[counter];
    counter++;
   }
 for (let i = 0 ; i < 5; i++){
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}
const Cards = ({ datas }) => {
    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
      setTimeout(() => {
        const shuffled_list = Shuffle(datas.values.data);
        const list = shuffled_list.map((value) => Card(value));
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
        // console.log(index) 
          <div key={index}>{card}</div>
        )}
      </div>
    );
  };
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
    // This to print update
    setTimeout(()=>{console.log(data)},1000);
    // data = data.data
    
  return (
    <div style={{
        background: `url("https://i.etsystatic.com/10842635/r/il/6d88a8/3717710901/il_570xN.3717710901_4eg6.jpg") no-repeat center fixed`,
        width: '1280px',
        height: '630px',
        display: 'grid',
        gridColumn: 'repeat(4,100px)',
        gridRow: 'repeat(10,100px)',
        border: '2px solid yellow',
        backgroundSize: 'contain'
    }}>
        <Cards datas={data}/>      
    </div>
  );
};

export default App;