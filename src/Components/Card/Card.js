import React from "react";
import "./Card.css";
const Card = ({name, data, img, visible, finished, onClick }) =>{
    return (
        <span className="card" onClick={onClick}>
        {
            visible||finished?
            <div className='card-front'>
            <img src={img}></img>
            <h1>{name}</h1> 
            <p>{data}</p>
            </div>
            :
            <div className='card-back'>
                <img src='https://bcassetcdn.com/public/blog/wp-content/uploads/2019/11/20170116/Top-10-Best-Logo-Designs-to-Inspire-You-DesignCrowd-blog.jpg'></img>
            </div>
        }
        </span>
    )
}
export default Card