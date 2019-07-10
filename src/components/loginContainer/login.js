import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import {logInFunction} from '../../api/authentication'

import styles from './login-style.js';

class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  login() {
    this.props.logInFunction(this.state,(data)=>{
      this.props.history.push('/home')
    },
    (error)=>{
      console.log(error)
    })
  }
  render() {
    return (
      <div>
        <div style={styles.padding}>
          <Container style={styles.loginCard} maxWidth="sm" >
            <Grid container direction="row" justify="center" alignItems="center" spacing={3} >
              <Grid item xs={12}>
                <div style={styles.profile}>
                  <h1 style={{ color: 'green' }}>Sign In</h1>
                </div>
              </Grid>
              <Grid item xs={8}>
                <form style={styles.loginForm} autoComplete="off" noValidate >
                  <TextField
                    id="standard-name"
                    label="Email"
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
                  <Grid item xs={8}>
                  <form style={styles.loginForm} autoComplete="off" noValidate >
                  <TextField
                    id="standard-name"
                    label="Password"
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
                  <Grid item xs={5}>
                  <div style={{ marginTop: 40 }}>
                    <Fab variant="extended" style={{ width: '100%' }} onClick={() => {
                      this.login()
                    }} color="primary" aria-label="Add">
                      Sign In
                  </Fab>
                  </div>
                  <div style={{ marginBottom: 40,marginTop:20 }}>
                    <Fab variant="extended" style={{ width: '100%' }} onClick={() => {
                      this.props.history.push('/signup')
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

const Login =connect(mapStateToProps,{logInFunction})(LoginPage)
export { Login };
