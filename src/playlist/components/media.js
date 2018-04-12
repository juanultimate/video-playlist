import React from "react"
import './media.css'
class Media extends React.Component {
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
			<div className='Media'>
				<div>
					<img 
					src={this.props.image}
					alt=""
					width={260}
					height={160}/>
				</div>
				<h3>{this.props.title}</h3>
                <p>{this.props.author}</p>
			</div>
			)
	}
}

export default Media