import React, {Component } from 'react';
import Media from './media'
import './playlist.css'

class Playlist extends Component {
    render() {
        console.log(this.props.data)
        const playllst = this.props.data.categories[0].playlist;
        return (
            <div className='Playlist-title'>
                {
                    playllst.map((item) =>{
                         return <Media {...item} key={item.id}></Media>
                    })
                }
            </div>
        )
    }
}


export default Playlist