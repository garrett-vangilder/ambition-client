import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import { fetchTeams, fetchPositions } from '../actions/salaryActions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


class Filter extends React.Component {
  state = {
    filterValue: 'val',
    filterDescription: '',
  };

  componentWillMount() {
    this.setState({ filterDescription: this.props.filterType })
    this.props.fetchTeams();
  }
  

  handleChange = event => {
    console.log('selected', event.target.value);
    this.setState({ filterValue: event.target.value })
  };

  renderTeams() {
    if (!this.props.teams) return
    return _.map(this.props.teams, (team) => {
      return (
        <MenuItem key={team.id} value={ team.name_abbreviated }>
          <em>{ team.name }</em>
        </MenuItem>
      );
    })
  }

  renderPositions() {
    if (!this.props.positions) return
    return _.map(this.props.positions, (position) => {
      return (
        <MenuItem key={position.id} value={position.name_abbreviated}>
          <em>{position.name}</em>
        </MenuItem>
      );
    })
  }

  render() {
    const { classes } = this.props;
    const { filterDescription } = this.state;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">{ this.props.filterType }</InputLabel>
          <Select
            value={this.props.filterType}
            onChange={this.handleChange}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            { this.props.filterType === 'position' ? this.renderPositions() : this.renderTeams() }
          </Select>
        </FormControl>
      </form>
    );
  }
}

const mapStateToProps = ({ rootReducer }) => {
  const { teams, filterType, positions } = rootReducer.salaryReducer
  return {
    positions,
    teams,
    filterType
  }
}

export default connect(mapStateToProps, { fetchTeams, fetchPositions })(withStyles(styles)(Filter));
