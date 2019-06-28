import React from "react";
import bed from "../images/bed.jpg"
const Bed = (props) => {
    const { drop, allowDrop } = props;
    return (
        <div className="warddrobediv" id="warddrobediv">
            <div id="screen">
                <div id="bedback" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
                <div id="bedfront" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>

                <img src={bed} alt="not found" class="warddrobe" />
            </div>
        </div>
    );
}
export default Bed;
