import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux';
import { fetchTeams, fetchSalaries, fetchPositions, setFilter } from '../actions/salaryActions';

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
  constructor() {
    super();
  }
componentWillMount() {
  this.props.setFilter('position')
  this.props.fetchPositions();
  this.props.fetchSalaries('position')
}

  handleChange = (event, value) => {
    this.setState({ value });
    value ? this.props.setFilter('team') : this.props.setFilter('position')
    value ? this.props.fetchSalaries('team') : this.props.fetchSalaries('position')
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

const mapStateToProps = ({ rootReducer }) => {
  const { teams } = rootReducer.salaryReducer;
  return {
    ...this.state,
    teams
  };
};

export default connect(mapStateToProps, { fetchTeams, fetchPositions, setFilter, fetchSalaries })(withStyles(styles)(Navbar));
