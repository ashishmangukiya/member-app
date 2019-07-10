import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from './partners-style.js'
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class Partners extends Component {
    constructor() {
        super()
        this.state={
          from:'',
          to:''
        }
    }

    render() {
      return (
        <div style={styles.padding}>
        <Container style={styles.template} maxWidth="md" >
          <Grid container direction="row" justify="center" alignItems="center" style={styles.partnersHeader} spacing={3} >
            <Grid item xs={6}>
            <form style={styles.selectMenu} autoComplete="off">
              <FormControl style={styles.formMargin} fullWidth >
              <InputLabel htmlFor="age-helper">From</InputLabel>
                <Select
                  value={this.state.from}
                  onChange={(event)=>{
                    this.setState({from:event.target.value})
                  }}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={'Airtel'}>Airtel</MenuItem>
                  <MenuItem value={`D'mart`}>D'mart</MenuItem>
                  <MenuItem value={`Flipkart`}>Flipkart</MenuItem>
                </Select>
              </FormControl>
              <FormControl style={styles.formMargin} fullWidth >
              <InputLabel htmlFor="age-helper">To</InputLabel>
                <Select
                  value={this.state.to}
                  onChange={(event)=>{
                    this.setState({to:event.target.value})
                  }}
                  inputProps={{
                    name: 'age',
                    id: 'age-simpl',
                  }}
                >
                  <MenuItem value={`D'mart`}>D'mart</MenuItem>
                  <MenuItem value={'Airtel'}>Airtel</MenuItem>
                  <MenuItem value={`Flipkart`}>Flipkart</MenuItem>
                </Select>
              </FormControl>
            </form>
            {
              (this.state.from!='' && this.state.to!='')?
            <p>1 {this.state.from} points = 100 {this.state.to} points</p>:null
            }
            </Grid>
          </Grid>
        </Container>
      </div>
      );  
    }
}
export {Partners};