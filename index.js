import React from "react"
import ReactDOM from "react-dom"
import Media from './src/playlist/components/media'

const app = document.getElementById("app");
const holaMundo = <h3> Hola Edmundo!  </h3>

// ReactDOM.render(holaMundo, app)
ReactDOM.render(<Media/>, app);

// console.log('hola mundo');;