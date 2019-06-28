import React from "react";
import warddrobe from "../images/warddrobe.jpg"
const Warddrobe=(props)=>{
    const{drop,allowDrop}=props;
    return(
        <div className="warddrobediv"  id="warddrobediv">
        <div id="screen">

            <div id="back" onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}></div>
            <div id="door1" onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}></div>
            <div id="door2" onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}></div>
            <img src={warddrobe} alt="not found" class="warddrobe"/>
        </div>
    </div>
    );
}
export default Warddrobe;
