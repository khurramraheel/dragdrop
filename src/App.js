import React, { Component } from 'react';
import './App.css';
import Warddrobe from "./components/warddrobe"
import WarddrobeIcons from "./components/warddrobeIcons"
import Bed from "./components/bed"
import html2canvas from "html2canvas";
let $ = window.$;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "warddrobe",
      menu: "colors"
    }
  }
  allowDrop = (ev) => {
    ev.preventDefault();
    var el = document.getElementById(ev.target.id);
  }

  drag = (ev) => {
    console.log("drag")
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var element = document.getElementById(data);
    if (element.tagName === "DIV") {
      const style = getComputedStyle(element)


      ev.target.style.backgroundColor = style.backgroundColor;
      ev.target.style.opacity = 0.5;
    }
    else {

      var child = document.getElementById(ev.target.id).childNodes;
      if (child.length < 1) {
        var imgelement = document.createElement("IMG");
        $(imgelement).draggable()
        imgelement.setAttribute('src', element.src)
        // imgelement.setAttribute('draggable','true')
        // imgelement.classList.add("icon");
        imgelement.style.width = "70px";
        imgelement.style.height = "70px";
        // console.log(imgelement)
        ev.target.appendChild(imgelement);
      }
    }
  }
  changeMenu = (menu) => {
    this.setState({ menu: menu });
  }
  changeScreen = (screen) => {
    this.setState({ screen: screen })
  }
  screenShot=()=>{ 
    var element=document.getElementById("screen")
  html2canvas(element).then(function(canvas) {
// Export the canvas to its data URI representation
// var base64image = canvas.toDataURL("image/png");

// Open the image in a new window
// window.open(base64image , "_blank");
document.getElementById("out").appendChild(canvas);
// window.saveAs(canvas, "yourwebsite_screenshot.png");
// document.body.appendChild(canvas)
});
  }
  render() {
    const { screen, menu } = this.state;
    return (
      <div className="App">
        <div className="navdiv">
          <button id="warddrobe" onClick={() => this.changeScreen("warddrobe")}>warddrobe</button>
          <button id="bed" onClick={() => this.changeScreen("bed")}>Bed</button>
        </div>
        <div className="tabdiv">
          <div>

            <button id="colors" onClick={() => this.changeMenu("colors")}> colors</button>
            <button id="icons" onClick={() => this.changeMenu("icons")}> icons</button>
            <button id="shotbut" onClick={this.screenShot}>screen shot</button>

          </div>
          {
            menu === "colors"
            &&
            <div className="colordiv" id="colordiv">

              Select colors

            <div className="color" draggable="true" onDragStart={(event) => this.drag(event)} id="div2">
              </div>
              <div className="color" style={{ backgroundColor: "aqua" }} draggable="true" onDragStart={(event) => this.drag(event)} id="div3">
              </div>
              <div className="color" draggable="true" style={{ backgroundColor: "blue" }} onDragStart={(event) => this.drag(event)} id="div4">
              </div>
              <div className="color" draggable="true" style={{ backgroundColor: "red" }} onDragStart={(event) => this.drag(event)} id="div5">
              </div>
              <div className="color" draggable="true" style={{ backgroundColor: "brown" }} onDragStart={(event) => this.drag(event)} id="div6">
              </div>
              <div className="color" draggable="true" style={{ backgroundColor: "green" }} onDragStart={(event) => this.drag(event)} id="div7">
              </div>
              <div className="color" draggable="true" style={{ backgroundColor: "greenyellow" }} onDragStart={(event) => this.drag(event)}
                id="div8">
              </div>
            </div>
            ||
            menu === "icons" &&
            <div className="icondiv" id="icondiv">
              Select icon
            {screen === "warddrobe" &&
                <WarddrobeIcons
                  drag={this.drag}
                ></WarddrobeIcons>}

            </div>
          }
        </div>
        {
          screen === "warddrobe" &&

          <Warddrobe
            drop={this.drop}
            allowDrop={this.allowDrop}
          ></Warddrobe>
          || screen === "bed" &&
          <Bed
            drop={this.drop}
            allowDrop={this.allowDrop}
          ></Bed>

        }
      <div id="out"></div>
      </div>
    );
  }
}

export default App;
