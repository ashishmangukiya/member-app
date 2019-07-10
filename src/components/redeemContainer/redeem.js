import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {getPartnersRewards} from '../../api/partners';
import { connect } from 'react-redux'
import styles from './redeem-style.js';

class RedeemPage extends Component {
  constructor() {
    super()
    this.state={
        partner:'',
        to:'',
        points:0,
        partners:[
          {
            name:"Airtel",
            points:200
          },
          {
            name:"D'mart",
            points:300
          },
          {
            name:"Flipkart",
            points:400
          }],
        rewardsByPartner:[
          {
            image:'https://image1.pricedekho.com/p/30/7/17/2592117/10747294-oricum-boxer-303-sneakersblack-picture-big.jpg',
            description:'The price is valid in all major cities of India including Mumbai, New Delhi, Bangalore, Chennai, Pune, Kolkata, Hyderabad, Jaipur, Chandigarh, Ahmedabad, NCR. Please check instructions at the specific stores for any deviation.'
          },
          {
            image:'https://image1.pricedekho.com/p/30/7/17/2592117/10747294-oricum-boxer-303-sneakersblack-picture-big.jpg',
            description:'The price is valid in all major cities of India including Mumbai, New Delhi, Bangalore, Chennai, Pune, Kolkata, Hyderabad, Jaipur, Chandigarh, Ahmedabad, NCR. Please check instructions at the specific stores for any deviation.'
          }
          ,{
            image:'https://image1.pricedekho.com/p/30/7/17/2592117/10747294-oricum-boxer-303-sneakersblack-picture-big.jpg',
            description:'The price is valid in all major cities of India including Mumbai, New Delhi, Bangalore, Chennai, Pune, Kolkata, Hyderabad, Jaipur, Chandigarh, Ahmedabad, NCR. Please check instructions at the specific stores for any deviation.'
          }
          ,{
            image:'https://image1.pricedekho.com/p/30/7/17/2592117/10747294-oricum-boxer-303-sneakersblack-picture-big.jpg',
            description:'The price is valid in all major cities of India including Mumbai, New Delhi, Bangalore, Chennai, Pune, Kolkata, Hyderabad, Jaipur, Chandigarh, Ahmedabad, NCR. Please check instructions at the specific stores for any deviation.'
          }
          ,{
            image:'https://image1.pricedekho.com/p/30/7/17/2592117/10747294-oricum-boxer-303-sneakersblack-picture-big.jpg',
            description:'The price is valid in all major cities of India including Mumbai, New Delhi, Bangalore, Chennai, Pune, Kolkata, Hyderabad, Jaipur, Chandigarh, Ahmedabad, NCR. Please check instructions at the specific stores for any deviation.'
          }
        ]
      }
      // this.props.getPartnersRewards(memberId,partnerId,(data)=>{
      //   console.log(data)
      // })
  }

  render() {
    return (
      <div style={styles.padding}>
        <Container style={styles.template} maxWidth="lg" >
          <Grid container  direction="row" justify="center" alignItems="center"  spacing={3} >
            <Grid item xs={6}>
            <form style={styles.selectMenu} autoComplete="off">
              <FormControl style={styles.formMargin} fullWidth >
              <InputLabel htmlFor="age-helper">Choose Partner</InputLabel>
                <Select
                  value={this.state.partner}
                  onChange={(event)=>{
                    this.setState({partner:event.target.value})
                    this.state.partners.map((partner)=>{
                      if(partner.name==event.target.value)
                        this.setState({points:partner.points})
                    })
                  }}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                >
                {
                  this.state.partners.map((partner)=>(
                    <MenuItem value={partner.name}>{partner.name}</MenuItem>
                  )
                  )
                  }
                </Select>
              </FormControl>
              </form>
            </Grid>
            <Grid item xs={12}>
            {this.state.partner.length?
                <p style={{textAlign:'center'}}><b>Total Points = </b>{this.state.points} Points</p>:null }
            </Grid>
            {this.state.partner.length?
              this.state.rewardsByPartner.map((reward)=>(
                <Grid item xs={4}>
                <Card style={styles.card}>
                <CardActionArea>
                  <CardMedia
                    style={styles.media}
                    image={reward.image}
                    title="BOXER BLACK"
                  />
                  <CardContent>
                   <p>{reward.description}</p>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Claim
                  </Button>
                </CardActions>
              </Card>
              </Grid>
              ))  
            :null}
            </Grid>   
        </Container>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  const { userDetails
} = state;
return {
  userDetails
};}

const Redeem =connect(mapStateToProps,{getPartnersRewards})(RedeemPage)
export { Redeem };