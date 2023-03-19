import React from "react"
function FlipableCard (){
    return (
        <div className="flipable-card-container"
        style={{
            height: '100px',
            width: '100px',
            borderRadius: '5%',
            borderColor: 'blue',
            background:'red'
        }}>
            <div className="front"></div>
            <div className="back"></div>
        </div>
    )
}
export default FlipableCard