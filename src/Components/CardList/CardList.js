import React, { useEffect, useState } from "react";
import "./CardList.css"
import Card from "../Card/Card";
const CardList = () => {
  const [items, setItems] = useState([
    {name: 'Escoger los segmentos de clientes', title:'Escoger los segmentos de clientes', "data":'Consiste en decidir a quien le venderemos nuestro producto.\nAlgunos ejemplos de esto puede ser: Mercados de masas, diversificados, multisegmentos, Nichos',imagUrl: 'https://www.ceupe.com/images/easyblog_articles/2317/b2ap3_medium_segmento-del-mercado.jpg'},
    {name: 'Escoger los segmentos de clientes', title: 'Soy:', 'data':'El paso donde se escoge en que clientes se enfocara la venta segun el segmento que se enfoque',imagUrl:'https://static.vecteezy.com/system/resources/previews/000/440/531/non_2x/question-mark-vector-icon.jpg'},
    {name: 'Definir la propuesta de valor', title:'Definir la propuesta de valor','data': 'Es cuando se define que beneficios o la razon por la que el producto es beneficioso\nLas caracteristicas de una propuesta de valor pueden ser: novedad, rendimiento, personalizacion, disenio o precio ',imagUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzr2QmMtlkRt9SJ8uT_-eEjnau3I07zquFxrYjokna5PPGSM32ylZHdJ9UZpfLdLoAkmI&usqp=CAU'},
    {name: 'Definir la propuesta de valor', title: 'Me caracterizo por :', 'data':'buscar ser novedoso o mejorar el rendimiento o buscar la personalizacion u ofrecer un disenio mas cuidado u ofrecer soluciones low cost', imagUrl:'https://static.vecteezy.com/system/resources/previews/000/440/531/non_2x/question-mark-vector-icon.jpg'},
    {name: 'Escoge los Canales', title: 'Escoge los Canales', 'data':'Es decidir que canales se usaran para comunicarse con el cliente\nLos canales se dividen en 5 fases: Notoriedad, evaluacion, compra, entrega y postventa', imagUrl:'https://communicationsplatformforbusiness.computerworld.es/archivos/202110/comunicacionesok.jpg'},
    {name: 'Escoge los Canales', title: 'Conllevo 5 pasos:', 'data':'Notoriedad, evaluacion, compra, entrega y postventa', imagUrl:'https://static.vecteezy.com/system/resources/previews/000/440/531/non_2x/question-mark-vector-icon.jpg'},
    {name: 'Establecer la relacion con el cliente', title: 'Establecer la relacion con el cliente', 'data':'Hay diferentes tipos:\nAsistencia personal, pago por uso, subscripcion.', imagUrl:'https://neilpatel.com/wp-content/uploads/2017/09/4-ways-understand-customers-better-make-money.jpg'},
    {name: 'Establecer la relacion con el cliente', title: 'Sirvo para:', 'data':'Definir la interaccion con tu cliente',imagUrl:'https://static.vecteezy.com/system/resources/previews/000/440/531/non_2x/question-mark-vector-icon.jpg'},
    {name: 'Determina las fuentes de ingresos', title: 'Determina las fuentes de ingresos', 'data':'Consiste en la forma en que la empresa genera los ingresos para cada cliente\n Existen varios tipos:\nVenta, pago por uso, subscripcion.', imagUrl:'https://unplandenegocios.com/wp-content/uploads/2020/01/ingresos.jpg'},
    {name: 'Determina las fuentes de ingresos', title: 'Represento:', 'data':'como se genera los ingresos para el cliente', imagUrl:'https://static.vecteezy.com/system/resources/previews/000/440/531/non_2x/question-mark-vector-icon.jpg'},
    {name: 'Averigua los Recursos clave', title: 'Consiste en descubrir que es lo mas importante para que funcione el negocio.\nSe pueden categorizar los recursos por:\nFisicos, intelectuales, humanos y financieros', 'data':'', imagUrl:'https://www.consultoriaconsciente.net/uploads/5/9/2/6/59262927/9193842_orig.jpg'},
    {name: 'Averigua los Recursos clave', title: 'Se puede categorizar por:', 'data':'Fisicos, intelectuales, humanos y financieros.', imagUrl:'https://static.vecteezy.com/system/resources/previews/000/440/531/non_2x/question-mark-vector-icon.jpg'},
  ])
  const [visibleItems, setVisibleItems] = useState([])
  const [finishedItems, setFinishedItems] = useState([])
  const [score, setScore] =useState(0)
  const [moves, setMoves] =useState(0)
  useEffect(() => {setItems(Shuffle(items)[0])
  console.log(items)
  for (let index = 0; index < items.length; index++) {
    console.log(items[index].name)
  }
}, []);
  return (
    <div className="card-list">
    <div style={{fontSize:"25px",gridArea:"7/2",color:"blue"}} hidden={score===10?"":"hidden"}>YOU WON!!!!!!!!!!!!!!!!!</div>
    <h1 style={{fontSize:"25px",gridArea:"6/2",color:"blue"}}>SCORE: {score*10}</h1>
    <h1 style={{fontSize:"25px",gridArea:"6/4",color:"blue"}}>MOVES: {moves}</h1>
    {items.map((item, index) => (
        <Card key={index} 
          name={item.title} 
          data={item.data} 
          img={item.imagUrl} 
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
                    if(items[visibleItems[0]].name===items[index].name){
                      finishedItems[index]=index
                      finishedItems[visibleItems[0]]=visibleItems[0]
                      setScore(score+1)
                    }
                    else{setTimeout(() => {setVisibleItems([])}, 1000)}
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
          }
        }
        />
      ))}
      </div>
  )
}
export default CardList
function Shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return [array, getPairs(array)]
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