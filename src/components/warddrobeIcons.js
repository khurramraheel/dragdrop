import React from "react"
import handle1 from "../images/hand1.png"
import handle2 from "../images/handle2.png"
import handle3 from "../images/handle3.png"
import handle4 from "../images/handle4.png"
import handle5 from "../images/handle5.png"

const WarddrobeIcons=(props)=>{
const {drag}=props;
    return(
        <div>
        <img src={handle1} className="icon" draggable="true" id="imag1" onDragStart={(event)=>drag(event)} />
        <img src={handle2} className="icon" draggable="true" id="imag2" onDragStart={(event)=>drag(event)} />
        <img src={handle3} className="icon" draggable="true" id="imag3" onDragStart={(event)=>drag(event)} />
        <img src={handle4} className="icon" draggable="true" id="imag4" onDragStart={(event)=>drag(event)} />
        <img src={handle5} className="icon" draggable="true" id="imag5" onDragStart={(event)=>drag(event)} />
        </div>
    );
}
export default WarddrobeIcons;