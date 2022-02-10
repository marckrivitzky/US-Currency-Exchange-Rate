
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Card, Row, Col, InputGroup} from 'react-bootstrap'
import WorldMap from '../assets/worldMap.gif'
import {AiFillPlusCircle} from 'react-icons/ai'
import {HiArrowSmRight} from 'react-icons/hi'

export default class HomePage extends React.Component{
	constructor(props){
		super(props)
			this.state = {
				amount: null,
				USD: null,
				CAD: .78768,
				BRL: .18999,
				MXN: .04848,
				EUR: 1.14200,
				CNY: .15717,
				RUB: .01330,
				AUD: .71308,
				INR: .01340,
				ARS: .00946,
				IRR: .00002,
				JPY: .00866,
				DZD: .00714,
				ZAR: .06475,
				EGP: .06375,
				ISK: .00803,
				SEK: .10941,
				KZT: .00234,
				NGN: .00241,
				PEN: .26262,
				UYU: .02308,
				BOB: .14906,
				AOA: .00193,
				PYG: .00015,
				GHS: .15738,
				TRY: .07356,
				IQD: .00070,
				ETB: .01998,
				UAH: .03603,
				COP: .00025,
				MNT: .00038,
				PHP: .01944,
				SAR: .26701,
				ECS: .00004,
				PLN: .25207,
				LYD: .21959,
				KRW: .00084,
				THB: .03040,
				GYD: .00499,
				CLP: .00121,
				NZD: .66414,
				FJD: .46976,
				MGA: .00025,
				IDR: .00007,
				PGK: .29193,
				PKR: .00576,
				CDF: .00050,
				converted: null,
				where: 'Where?'
				
			}
		
	}

	convertCAD = () => {this.setState({converted: this.state.amount * this.state.CAD, where: 'Canada CAD'})}
	convertBRL = () => {this.setState({converted: this.state.amount * this.state.BRL, where: 'Brazil BRL'})}
	convertMXN = () => {this.setState({converted: this.state.amount * this.state.MXN, where: 'Mexico MXN'})}
	convertEUR = () => {this.setState({converted: this.state.amount * this.state.EUR, where: 'Europe EUR'})}
	convertCNY = () => {this.setState({converted: this.state.amount * this.state.CNY, where: 'China CNY'})}
	convertRUB = () => {this.setState({converted: this.state.amount * this.state.RUB, where: 'Russia RUB'})}
	convertAUD = () => {this.setState({converted: this.state.amount * this.state.AUD, where: 'Australia AUD'})}
	convertINR = () => {this.setState({converted: this.state.amount * this.state.INR, where: 'India INR'})}
	convertARS = () => {this.setState({converted: this.state.amount * this.state.ARS, where: 'Argentina ARS'})}
	convertIRR = () => {this.setState({converted: this.state.amount * this.state.IRR, where: 'Iran IRR'})}
	convertJPY = () => {this.setState({converted: this.state.amount * this.state.JPY, where: 'Japan JPY'})}
	convertDZD = () => {this.setState({converted: this.state.amount * this.state.JPY, where: 'Algeria DZD'})}
	convertZAR = () => {this.setState({converted: this.state.amount * this.state.ZAR, where: 'South Africa ZAR'})}
	convertEGP = () => {this.setState({converted: this.state.amount * this.state.EGP, where: 'Egypt EGP'})}
	convertISK = () => {this.setState({converted: this.state.amount * this.state.ISK, where: 'Iceland ISK'})}
	convertSEK = () => {this.setState({converted: this.state.amount * this.state.SEK, where: 'Sweden SEK'})}
	convertKZT = () => {this.setState({converted: this.state.amount * this.state.KZT, where: 'Kazakhstan KZT'})}
	convertNGN = () => {this.setState({converted: this.state.amount * this.state.NGN, where: 'Nigeria NGN'})}
	convertPEN = () => {this.setState({converted: this.state.amount * this.state.PEN, where: 'Peru PEN'})}
	convertUYU = () => {this.setState({converted: this.state.amount * this.state.UYU, where: 'Uruguay UYU'})}
	convertBOB = () => {this.setState({converted: this.state.amount * this.state.BOB, where: 'Bolivia BOB'})}
	convertAOA = () => {this.setState({converted: this.state.amount * this.state.AOA, where: 'Angola AOA'})}
	convertPYG = () => {this.setState({converted: this.state.amount * this.state.PYG, where: 'Paraguay PYG'})}
	convertGHS = () => {this.setState({converted: this.state.amount * this.state.GHS, where: 'Ghana GHS'})}
	convertTRY = () => {this.setState({converted: this.state.amount * this.state.TRY, where: 'Turkey TRY'})}
	convertIQD = () => {this.setState({converted: this.state.amount * this.state.IQD, where: 'Iraq IQD'})}
	convertETB = () => {this.setState({converted: this.state.amount * this.state.ETB, where: 'Ethiopia ETB'})}
	convertUAH = () => {this.setState({converted: this.state.amount * this.state.UAH, where: 'Ukraine UAH'})}
	convertCOP = () => {this.setState({converted: this.state.amount * this.state.COP, where: 'Columbia COP'})}
	convertMNT = () => {this.setState({converted: this.state.amount * this.state.MNT, where: 'Mongolia MNT'})}
	convertPHP = () => {this.setState({converted: this.state.amount * this.state.PHP, where: 'Philippines PHP'})}
	convertSAR = () => {this.setState({converted: this.state.amount * this.state.SAR, where: 'Saudi Arabia SAR'})}
	convertECS = () => {this.setState({converted: this.state.amount * this.state.ECS, where: 'Ecuador ECS'})}
	convertPLN = () => {this.setState({converted: this.state.amount * this.state.PLN, where: 'Poland PLN'})}
	convertLYD = () => {this.setState({converted: this.state.amount * this.state.LYD, where: 'Libya LYD'})}
	convertKRW = () => {this.setState({converted: this.state.amount * this.state.KRW, where: 'South Korea KRW'})}
	convertTHB = () => {this.setState({converted: this.state.amount * this.state.THB, where: 'Thailand THB'})}
	convertGYD = () => {this.setState({converted: this.state.amount * this.state.GYD, where: 'Guyana GYD'})}
	convertCLP = () => {this.setState({converted: this.state.amount * this.state.CLP, where: 'Chile CLP'})}
	convertNZD = () => {this.setState({converted: this.state.amount * this.state.NZD, where: 'New Zealand NZD'})}
	convertFJD = () => {this.setState({converted: this.state.amount * this.state.FJD, where: 'Fiji FJD'})}
	convertMGA = () => {this.setState({converted: this.state.amount * this.state.MGA, where: 'Madagascar MGA'})}
	convertIDR = () => {this.setState({converted: this.state.amount * this.state.IDR, where: 'Indonesia IDR'})}
	convertPGK = () => {this.setState({converted: this.state.amount * this.state.PGK, where: 'Papua New Guinea PGK'})}
	convertPKR = () => {this.setState({converted: this.state.amount * this.state.PKR, where: 'Pakistan PKR'})}
	convertCDF = () => {this.setState({converted: this.state.amount * this.state.CDF, where: 'Congo CDF'})}

	handleInputChangeAmount = (e) => {this.setState({ amount: e.target.value });}	

	render(){
		let buttonHolder = <AiFillPlusCircle size={17} />
		let arrows = <HiArrowSmRight size={90} color={'white'} />
		return(
			<div className="container">
				<div className="container-position">
				
				
						
					
					<Card style={{width: 'fit-screen', position: 'relative', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'rgb(6, 64, 27)', border:'7px solid rgb(6, 64, 27)'}}>
						<h1 className="title-labels">US Currency Calculator</h1>
						<div className="form">
							<br/>
							<Row>
							<Form.Group as={Col} controlId="formGridZip">
								<h3 className="title-labels">US Currency Amount</h3>
								{/* <Form.Label >US Currency Amount</Form.Label> */}
									<InputGroup style={{width: '300px'}} className="mb-3">
								    	<InputGroup.Text>$</InputGroup.Text>
								  	 		 <Form.Control  type="number" value={ this.state.amount } onChange={ this.handleInputChangeAmount }  />
								    	<InputGroup.Text>.00</InputGroup.Text>
								 	 </InputGroup>
							</Form.Group>
							<Col>
								{arrows}
							</Col>
						

							<Form.Group as={Col} controlId="formGridZip">
								<h3 className="title-labels">{this.state.where}</h3>
								{/* <Form.Label>{this.state.where}</Form.Label> */}
									<InputGroup style={{width: '300px'}} className="mb-3">
								    	<InputGroup.Text>$</InputGroup.Text>
								  	 		 <Form.Control disabled="true" type="number" value={ this.state.converted }  />
								    	
								 	 </InputGroup>
							</Form.Group>
							</Row>
						</div>

						<br/>	
						<div className="home-page-body">
						
							<Card style={{width: '50rem', position: 'relative', marginLeft: 'auto', marginRight: 'auto', border: '7px solid white'}}>
								<img src={WorldMap} width={'max-content'} alt='map' />
								<button className="btn" title="Canada" id="canada" type="button" onClick={this.convertCAD} onMouseOver={'Canada'}>{buttonHolder}</button>
								<button className="btn" title="Brazil" id="brazil" type="button" onClick={this.convertBRL}>{buttonHolder}</button>
								<button className="btn" title="Mexico" id="mexico" type="button" onClick={this.convertMXN}>{buttonHolder}</button>
								<button className="btn" title="Europe" id="europe" type="button" onClick={this.convertEUR}>{buttonHolder}</button>
								<button className="btn" title="China" id="china" type="button" onClick={this.convertCNY}>{buttonHolder}</button>
								<button className="btn" title="Russia" id="russia" type="button" onClick={this.convertRUB}>{buttonHolder}</button>
								<button className="btn" title="Australia" id="australia" type="button" onClick={this.convertAUD}>{buttonHolder}</button>
								<button className="btn" title="India" id="india" type="button" onClick={this.convertINR}>{buttonHolder}</button>
								<button className="btn" title="Argentina" id="argentina" type="button" onClick={this.convertARS}>{buttonHolder}</button>
								<button className="btn" title="Iran" id="iran" type="button" onClick={this.convertIRR}>{buttonHolder}</button>
								<button className="btn" title="Japan" id="japan" type="button" onClick={this.convertJPY}>{buttonHolder}</button>
								<button className="btn" title="Algeria" id="algeria" type="button" onClick={this.convertDZD}>{buttonHolder}</button>
								<button className="btn" title="South Africa" id="south-africa" type="button" onClick={this.convertZAR}>{buttonHolder}</button>
								<button className="btn" title="Egypt" id="egypt" type="button" onClick={this.convertEGP}>{buttonHolder}</button>
								<button className="btn" title="Iceland" id="iceland" type="button" onClick={this.convertISK}>{buttonHolder}</button>
								<button className="btn" title="Sweden" id="sweden" type="button" onClick={this.convertSEK}>{buttonHolder}</button>
								<button className="btn" title="Kazakhstan" id="kazakhstan" type="button" onClick={this.convertKZT}>{buttonHolder}</button>
								<button className="btn" title="Nigeria" id="nigeria" type="button" onClick={this.convertNGN}>{buttonHolder}</button>
								<button className="btn" title="Peru" id="peru" type="button" onClick={this.convertPEN}>{buttonHolder}</button>
								<button className="btn" title="Uruguay" id="uruguay" type="button" onClick={this.convertUYU}>{buttonHolder}</button>
								<button className="btn" title="Bolivia" id="bolivia" type="button" onClick={this.convertBOB}>{buttonHolder}</button>
								<button className="btn" title="Angola" id="angola" type="button" onClick={this.convertAOA}>{buttonHolder}</button>
								<button className="btn" title="Paraguay" id="paraguay" type="button" onClick={this.convertPYG}>{buttonHolder}</button>
								<button className="btn" title="Ghana" id="ghana" type="button" onClick={this.convertGHS}>{buttonHolder}</button>
								<button className="btn" title="Turkey" id="turkey" type="button" onClick={this.convertTRY}>{buttonHolder}</button>
								<button className="btn" title="Iraq" id="iraq" type="button" onClick={this.convertIQD}>{buttonHolder}</button>
								<button className="btn" title="Ethiopia" id="ethiopia" type="button" onClick={this.convertETB}>{buttonHolder}</button>
								<button className="btn" title="Ukraine" id="ukraine" type="button" onClick={this.convertUAH}>{buttonHolder}</button>
								<button className="btn" title="Columbia" id="columbia" type="button" onClick={this.convertCOP}>{buttonHolder}</button>
								<button className="btn" title="Mongolia" id="mongolia" type="button" onClick={this.convertMNT}>{buttonHolder}</button>
								<button className="btn" title="Philippines" id="philippines" type="button" onClick={this.convertPHP}>{buttonHolder}</button>
								<button className="btn" title="Saudi Arabia" id="saudi-arabia" type="button" onClick={this.convertSAR}>{buttonHolder}</button>
								<button className="btn" title="Ecuador" id="ecuador" type="button" onClick={this.convertECS}>{buttonHolder}</button>
								<button className="btn" title="Poland" id="poland" type="button" onClick={this.convertPLN}>{buttonHolder}</button>
								<button className="btn" title="Libya" id="libya" type="button" onClick={this.convertLYD}>{buttonHolder}</button>
								<button className="btn" title="South Korea" id="south-korea" type="button" onClick={this.convertKRW}>{buttonHolder}</button>
								<button className="btn" title="Thailand" id="thailand" type="button" onClick={this.convertTHB}>{buttonHolder}</button>
								<button className="btn" title="Guyana" id="guyana" type="button" onClick={this.convertGYD}>{buttonHolder}</button>
								<button className="btn" title="Chile" id="chile" type="button" onClick={this.convertCLP}>{buttonHolder}</button>
								<button className="btn" title="New Zealand" id="new-zealand" type="button" onClick={this.convertNZD}>{buttonHolder}</button>
								<button className="btn" title="Fiji" id="fiji" type="button" onClick={this.convertFJD}>{buttonHolder}</button>
								<button className="btn" title="Madagascar" id="madagascar" type="button" onClick={this.convertMGA}>{buttonHolder}</button>
								<button className="btn" title="Indonesia" id="indonesia" type="button" onClick={this.convertIDR}>{buttonHolder}</button>
								<button className="btn" title="Papua New Guinea" id="papua-new-guinea" type="button" onClick={this.convertPGK}>{buttonHolder}</button>
								<button className="btn" title="Pakistan" id="pakistan" type="button" onClick={this.convertPKR}>{buttonHolder}</button>
								<button className="btn" title="Congo" id="congo" type="button" onClick={this.convertCDF}>{buttonHolder}</button>
								
							</Card>

						</div>
						<br />
						
				</Card>

				</div>

			</div>
		);
	}

}
