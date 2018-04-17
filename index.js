import React from "react"
import ReactDOM from "react-dom"
import Playlist from './src/playlist/components/playlist'
import Clock from './src/playlist/components/clock.js'
import data from './src/api.json'



// const holaMundo = <h3> Hola Edmundo!  </h3>

// ReactDOM.render(holaMundo, app)
const app = document.getElementById("playlist");
const playlist = <Playlist data={data}/>
ReactDOM.render(playlist, app);

// console.log('hola mundo');