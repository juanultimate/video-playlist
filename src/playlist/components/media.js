import React from "react"
import './media.css'
import PropTypes from 'prop-types'
class Media extends React.Component {
    state = {
        playing: 'Stop'
    }

    handleClick = (event) => {
        // console.log(this.props.image)
        this.setState({
            playing: 'Playing..',
        })
    }
	render(){
	    const styles = {
	        container :{
	            fontSize : 14,
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
        }
        }
		return (
			<div className='Media' onClick={this.handleClick}>
				<div>
					<img 
					src={this.props.image}
					alt=""
					width={260}
					height={160}/>
				</div>
				<h3>{this.props.title}</h3>
                <p>{this.props.author}</p>
				<p>{this.state.playing}</p>
			</div>
			)
	}
}

Media.propTypes ={
	image : PropTypes.string,
	author : PropTypes.string,
	title : PropTypes.string
}

export default Media