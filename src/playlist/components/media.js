import React from "react"

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
			<div style={styles.container}>
				<div>
					<img 
					src={'./images/covers/bitcoin.jpg'}
					alt=""
					width={260}
					height={160}/>
				</div>
				<h3>Por que aprender React?</h3>
                <p>Leonidas Esteban</p>
			</div>
			)
	}
}

export default Media