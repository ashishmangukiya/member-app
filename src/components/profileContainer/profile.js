import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import styles from './profile-style.js'
class ProfilePage extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div style={styles.padding}>
        <Container style={styles.template} maxWidth="sm" >
          <Grid container spacing={3} >
            <Grid item xs={6}>
              <p><b>First Name</b></p>
            </Grid>
            <Grid item xs={6}>
              <p>{this.props.userDetails.firstname}</p>
            </Grid>
            <Grid item xs={6}>
              <p><b>Last Name</b></p>
            </Grid>
            <Grid item xs={6}>
              <p>{this.props.userDetails.lastname}</p>
            </Grid>
            <Grid item xs={6}>
              <p><b>Email</b></p>
            </Grid>
            <Grid item xs={6}>
              <p>{this.props.userDetails.email}</p>
            </Grid>
            <Grid item xs={6}>
              <p><b>Phone Number</b></p>
            </Grid>
            <Grid item xs={6}>
              <p>{this.props.userDetails.phoneNumber}</p>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  const { userDetails:{ userDetails
  }
} = state;
console.log(userDetails)
return {
  userDetails
};
}

const Profile =connect(mapStateToProps)(ProfilePage)
export { Profile };