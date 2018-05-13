import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});


class Navbar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Salary By Position" />
            <Tab label="Salary By Team" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    ...this.state
  };
};

export default connect(mapStateToProps, null)(withStyles(styles)(Navbar));
