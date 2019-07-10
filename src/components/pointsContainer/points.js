import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from './points-style.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {getPartnersHistory} from '../../api/partners';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';

class PointsPage extends Component {

  constructor() {
    super();
    this.state = {
      earnedPoints : [
        {
         date: '24/08/2018',
         activity: `Earned 24 points for visiting `,
         points: 24
        },
        {
          date: '24/09/2018',
          activity:`Earned 240 points on Bill `,
          points: 240
         },
         {
          date: '24/10/2018',
          activity:`redeem 240 points for buying keyboard`,
          points: 240
         }
      ]
    }
    // this.props.getPartnersHistory(memberId,partnerId,(data)=>{
    //   console.log(data)
    // })
  }

  render() {

    return (
      <div>
        <div style={styles.padding}>
          <Container style={styles.template} maxWidth="lg" >
            <Grid container style={styles.textStyle} spacing={3} >
              <Grid item xs={12}>
                <p style={styles.nameStyle}><b>{this.props.match.params.id}</b></p>
              </Grid>
              {/* <Grid item xs={3}>
                <Button onClick={() => { }} fullWidth variant="contained" color="primary" >
                  400
                </Button>
              </Grid> */}
                <Grid item xs={12}>
                  <h3>LOGS</h3>
                  {this.state.earnedPoints.length?
                    <Paper style={styles.tableStyle}>
                    <Table style={styles.tableView}>
                      <TableHead>
                        <TableRow>
                          <TableCell><b>Date</b></TableCell>
                          <TableCell ><b>Descriptions</b></TableCell>
                          <TableCell ><b>Points</b></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.earnedPoints.map((row,i) => (
                          <TableRow key={row.date}>
                            <TableCell component="th" scope="row">
                              {row.date}
                            </TableCell>
                            <TableCell  >{row.activity}</TableCell>
                            <TableCell >{(this.state.earnedPoints.length==i+1)?'-':'+' }{row.points}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    </Paper>:
                    <p>no logs found</p>
                  }
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
};}

const Points =connect(mapStateToProps,{getPartnersHistory})(PointsPage)
export { Points };
