import React from "react"
import ReactDOM from "react-dom"
import Media from './src/playlist/components/media'
import Clock from './src/playlist/components/clock.js'



// const holaMundo = <h3> Hola Edmundo!  </h3>

// ReactDOM.render(holaMundo, app)
const app = document.getElementById("playlist");
const coldplay = <Media author="Coldplay" title="Hymn for weekend" image="./images/covers/coldplay.jpg"/>
const jfv = <Media author="Juan Fernando Velasco" title="Misquilla" image="./images/covers/misquilla.jpg"/>

ReactDOM.render(coldplay, app);

// console.log('hola mundo');