import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import { fetchTeams } from '../actions/salaryActions';

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
    filterValue: '',
    filterDescription: '',
  };

  componentWillMount() {
    this.props.fetchTeams();
  }

  handleChange = event => {
    console.log('selected', event)
  };

  fetchTeams() {
    this.props.fetchTeams();
  }

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

  render() {
    const { classes } = this.props;
    const { filterDescription } = this.state;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">{ filterDescription }</InputLabel>
          <Select
            value={this.state.filterValue}
            onChange={this.handleChange}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            { this.renderTeams() }
          </Select>
        </FormControl>
      </form>
    );
  }
}

const mapStateToProps = ({ rootReducer }) => {
  const { teams } = rootReducer.salaryReducer
  return {
    teams,
  }
}

export default connect(mapStateToProps, { fetchTeams })(withStyles(styles)(Filter));
