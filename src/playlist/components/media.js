import React, {PureComponent} from "react"
import './media.css'
import PropTypes from 'prop-types'
class Media extends PureComponent {
    state = {
        playing: 'Stopped'
    }

    handleClick = (event) => {
         console.log(this.props.title)
		if(this.state.playing === "Stopped") {
            this.setState({
                playing: 'Playing'
            })
        }
        else{
         	this.setState({
				playing: "Stopped"
			})
		}
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
					src={this.props.cover}
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
	cover : PropTypes.string,
	author : PropTypes.string,
	title : PropTypes.string
}

export default Media