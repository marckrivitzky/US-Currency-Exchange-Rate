// import React, { PureComponent} from "react";
// import { withRouter } from 'react-router-dom';
// import { Form, Card, Row, Col, InputGroup} from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css";

// class CurrencyAmount extends PureComponent{
// 	constructor(props){
// 		super(props)
// 			this.state = {
// 				amount: null,
// 				USD: null,
// 				CAD: .79,
				
// 			}
// 	}

// 	handleInputChangeAmount = (e) => {this.setState({ amount: e.target.value });}

//     handleSubmitAmount = () => {this.props.onSubmitAmount(this.state.amount);
// 		console.log(this.state.amount)
// 	}

// 	toHomePage = () => {
// 	   const { history } = this.props;
// 	   if(history) history.push('/HomePage');
// 	}


// 	render(){
// 		return(
// 			<div className="container">
				
// 					<Form.Group as={Col} controlId="formGridZip">
// 						<Form.Label>US Currency Amount</Form.Label>
// 							<InputGroup className="mb-3">
// 						    	<InputGroup.Text>$</InputGroup.Text>
// 						  	 		 <Form.Control type="number" value={ this.state.amount } onChange={ this.handleInputChangeAmount }  />
// 						    	<InputGroup.Text>.00</InputGroup.Text>
// 						 	 </InputGroup>
// 					</Form.Group>
// 					<button className="btn btn-success" onClick={()=>{this.handleSubmitAmount(); this.toHomePage();}} type="button">Submit</button>
// 			</div>
// 		);
// 	}

// }
// export default withRouter(CurrencyAmount)

import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import { Form, Card, Row, Col, InputGroup} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

class CurrencyAmount extends PureComponent{
	constructor(props){
		super(props)
			this.state = {
				amount: null,
				USD: null,
				CAD: .79,
				
			}
	}

	handleInputChangeAmount = (e) => {this.setState({ amount: e.target.value });}

    handleSubmitAmount = () => {this.props.onSubmitAmount(this.state.amount);
		console.log(this.state.amount)
	}

	toHomePage = () => {
	   const { history } = this.props;
	   if(history) history.push('/HomePage');
	}


	render(){
		return(
			<div className="container">
				
					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>US Currency Amount</Form.Label>
							<InputGroup className="mb-3">
						    	<InputGroup.Text>$</InputGroup.Text>
						  	 		 <Form.Control type="number" value={ this.state.amount } onChange={ this.handleInputChangeAmount }  />
						    	<InputGroup.Text>.00</InputGroup.Text>
						 	 </InputGroup>
					</Form.Group>
					<button className="btn btn-success" onClick={()=>{this.handleSubmitAmount(); this.toHomePage();}} type="button">Submit</button>
			</div>
		);
	}

}
export default withRouter(CurrencyAmount)