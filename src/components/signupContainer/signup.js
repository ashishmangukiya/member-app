import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import {signUpFunction} from '../../api/authentication'
import styles from './signup-style.js';

class SignupPage extends Component {

	constructor() {
		super();
		this.state = {
			email: '',
			firstname: '',
			lastname: '',
			password: '',
			phoneNumber: ''
		}
	}
	signUp() {
		this.props.signUpFunction(this.state,(data)=>{
			this.props.history.push('/login')
			console.log(data)
		},(error)=>{
			console.log(error)
		})
	}
	render() {
		return (
			<div>
				<div style={styles.padding}>
					<Container style={styles.signupCard} maxWidth="sm" >
						<Grid container direction="row" justify="center" alignItems="center" spacing={3} >
							<Grid item xs={12}>
								<div style={styles.profile}>
									<h1 style={{ color: 'green' }}>Sign Up</h1>
								</div>
							</Grid>
							<Grid item xs={4}>
								<p><b>First Name*</b></p>
							</Grid>
							<Grid item xs={8}>
								<form style={styles.signupForm} noValidate autoComplete="off" >
									<TextField
										id="standard-name"
										className="text-field"
										fullWidth
										value={this.state.firstname}
										onChange={(event) => {
											this.setState({ firstname: event.target.value })
										}}
										margin="normal"
									/>
								</form>
							</Grid>
							<Grid item xs={4}>
								<p><b>Last Name*</b></p>
							</Grid>
							<Grid item xs={8}>
								<form style={styles.signupForm} noValidate autoComplete="off" >
									<TextField
										id="standard-name"
										className="text-field"
										fullWidth
										value={this.state.lastname}
										onChange={(event) => {
											this.setState({ lastname: event.target.value })
										}}
										margin="normal"
									/>
								</form>
							</Grid>
							<Grid item xs={4}>
								<p><b>Email*</b></p>
							</Grid>
							<Grid item xs={8}>
								<form style={styles.signupForm} noValidate autoComplete="off" >
									<TextField
										id="standard-name"
										className="text-field"
										fullWidth
										value={this.state.email}
										onChange={(event) => {
											this.setState({ email: event.target.value })
										}}
										margin="normal"
									/>
								</form>
							</Grid>
							<Grid item xs={4}>
								<p><b>Phone Number*</b></p>
							</Grid>
							<Grid item xs={8}>
								<form style={styles.signupForm} noValidate autoComplete="off" >
									<TextField
										id="standard-name"
										className="text-field"
										fullWidth
										value={this.state.phoneNumber}
										onChange={(event) => {
											this.setState({ phoneNumber: event.target.value })
										}}
										margin="normal"
									/>
								</form>
							</Grid>
							<Grid item xs={4}>
								<p><b>Password*</b></p>
							</Grid>
							<Grid item xs={8}>
								<form style={styles.signupForm} noValidate autoComplete="off" >
									<TextField
										id="standard-name"
										className="text-field"
										fullWidth
										value={this.state.password}
										onChange={(event) => {
											this.setState({ password: event.target.value })
										}}
										margin="normal"
									/>
								</form>
							</Grid>
							<Grid item xs={4}>
								<div style={{ marginBottom: 40 }}>
									<Fab variant="extended" style={{ width: '100%' }} onClick={() => {
										this.signUp()
									}} color="secondary" aria-label="Add">
										Sign Up
                  </Fab>
								</div>
							</Grid>
						</Grid>

					</Container>
				</div>
			</div>
		);
	}
}

const mapStateToProps=state=>{
  const { userDetails
} = state;
return {
  userDetails
};
}

const Signup =connect(mapStateToProps,{signUpFunction})(SignupPage)
export { Signup };
