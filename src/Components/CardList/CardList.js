import React, { useEffect, useState } from "react";
import "./CardList.css"
import Card from "../Card/Card";
const CardList = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [visibleItems, setVisibleItems] = useState([])
  const [finishedItems, setFinishedItems] = useState([])
  const [score, setScore] =useState(0)
  const [moves, setMoves] =useState(0)
  useEffect(() => {
    fetch("https://api.disneyapi.dev/characters?page=100")
    .then( (res) => res.json() )
    .then( (res) =>
    {
        setIsLoaded(true) 
        setItems(Shuffle(res.data))
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    })    
  }, []);
  if (isLoaded && error===null){
    return (
      <div>
      <p>Score:{score}  Moves:{moves}</p>
        <div className="card-list">
      {items[0].map((item, index) => (
          <Card key={index} 
            name={item.name} 
            shortFilms={item.shortFilms} 
            tvShows={item.tvShows} 
            videoGames={item.videoGames} 
            films={item.films} 
            img={item.imageUrl} 
            visible={visibleItems.includes(index)||finishedItems.includes(index)?true:false}
            onClick={() => {
              if (!finishedItems.includes(index)) {
                switch (visibleItems.length) {
                  case 0:
                    setVisibleItems([index])
                    setMoves(moves+1) 
                    break;
                  case 1:
                    if (visibleItems[0] !== index) {
                      setVisibleItems(visibleItems.concat(index));
                      if(visibleItems[0]===items[1][index]){
                        finishedItems[index]=index
                        finishedItems[items[1][index]]=items[1][index]
                        setScore(score+1)
                      }
                      else{setTimeout(() => {setVisibleItems([])}, 600)}
                    }
                    break
                  case 2:
                    setVisibleItems([index])
                    setMoves(moves+1) 
                    break;
                  default:
                    setVisibleItems([]);
                }
              }
            }}
          />
        ))}
        </div> 
      </div>   
    )
  }
  else if(!isLoaded){return(<div>Loading</div>)}
  else{return(<div>Error:{error.message}</div>)}
}
export default CardList
function Shuffle(value){
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
function getPairs(list){
var list2 = list
var indexes = []
for (let k = 0 ; k < list2.length ; k++ ){
for (let n = k+1; n < list2.length; n++){
if (list2[k]["name"]===list2[n]["name"] && indexes.includes(k)===false){
  indexes[k] = n
  indexes[n] = k
}
}
}
return indexes;
}
const checkItems = (firstIndex, secondIndex,items) => {
  if (
    firstIndex !== secondIndex &&
    items[0][firstIndex].imageUrl === items[0][secondIndex].imageUrl
  ) {
    setFinishedItems([...finishedItems, firstIndex, secondIndex]);
  } else {
    setTimeout(() => {
      setVisibleItems([]);
    }, 600);
  }
};