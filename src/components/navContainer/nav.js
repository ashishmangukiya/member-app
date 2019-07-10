import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './nav.css'

function LinkTab(props) {
  return (
    <Tab
      component="a"
      value="/"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

class Nav extends Component {
  constructor() {
    super();
    this.state={
      value:"0"
    }
}
componentDidMount() {
  console.log('this.props.history')
  console.log(this.props)
}

  render() {
    return (
      <div className="nav-style">
      <AppBar position="static">
        <Tabs variant="fullWidth" value={this.state.value} onChange={(event,value)=>{
          this.setState({value})
        }}>
          <Tab value="0" label="Home" component={Link} to="/home" />
          <Tab value="1" label="Convert" component={Link} to="/partners" />
          <Tab value="2" label="Redeem" component={Link} to="/redeem" />
          <Tab value="3" label="Profile" component={Link} to="/profile" />
        </Tabs>
      </AppBar>
    </div>
    )
  }
}

export { Nav };