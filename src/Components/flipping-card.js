import React from "react"
function FlipableCard (){
    return (
        <div className="flipable-card-container"
        style={{
            height: '300px',
            width: '300px',
            perspective: "1000px"
        }}>
            <div style={{
                height:"100%",
                width:"100%",
                borderRadius: '5%',
                border: "2px solid green",
                position:"relative",
                transformStyle: "preserve-3d",
                transition: "transform 1000ms",
                transform: "rotateY(180deg)"

            }}>
                <div style={{
                    width:"100%",
                    height:"100%",
                    display: "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    position: "absolute",
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    backgroundColor: "red"
                }}>
                    <p>Hola</p>
                </div>
                <div style={{
                    width:"100%",
                    height:"100%",
                    display: "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    position: "absolute",
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                    backgroundColor: "black"
                }}>
                </div>
            </div>
        </div>
    )
}
export default FlipableCard