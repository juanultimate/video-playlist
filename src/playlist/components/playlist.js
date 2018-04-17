import React from 'react';
import Media from './media'
import './playlist.css'

function Playlist(props) {

        console.log(props.data)
        const playllst = props.data.categories[0].playlist;
        return (

            <div className='Playlist-title'>
                <p> este es una playlist muy bonita</p>

                {
                    playllst.map((item) =>{
                         return <Media {...item} key={item.id}></Media>
                    })
                }
            </div>
        )


}


export default Playlist