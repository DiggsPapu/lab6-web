import { Card } from "./Card";
import React from 'react';
export const Cards = ({datas}) =>{
    return (
        <div>
           <ul>
            {
                datas.map((value) =>(
                    <li>
                        <Card url={value.url}/>
                    </li>
                ))
            }
            </ul> 
        </div>
    )
}