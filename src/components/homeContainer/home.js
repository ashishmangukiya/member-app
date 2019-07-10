import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from './home-style.js';
import {getPartners} from '../../api/partners';
import { connect } from 'react-redux'

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      partnersDetail:[
        {
        name:'Airtel',
        points:300
        },
        {
          name:'Colgate',
          points:400
        },
        {
          name:'Videocon',
          points:200
        },
        {
          name:'Samsung',
          points:100
        }
      ]
    }
  }
  componentDidMount() {
    // this.props.getPartners(memberId,(data)=>{
    //   console.log(data)
    // })
  }

  render() {
    return (
      <div>
        <div style={styles.padding}>
          <Container style={styles.template} maxWidth="sm" >
            {
              this.state.partnersDetail.map((partner)=>(
                <Grid container key={partner.name} spacing={3} >
                <Grid item xs={8}>
                <p style={styles.nameStyle}><b>{partner.name}</b></p>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={() => {this.props.history.push(`/logs/${partner.name}`) }} fullWidth variant="contained" color="primary" >
                {partner.points}
                </Button>
              </Grid>
              </Grid>
              ))
            }
          </Container>
        </div>
      </div>
    );
  }
}
const mapStateToProps=state=>{
  const { userDetails
} = state;
console.log(userDetails)
return {
  userDetails
};}

const Home =connect(mapStateToProps,{getPartners})(HomePage)
export { Home };
