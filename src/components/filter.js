import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import { fetchTeams, fetchPositions, fetchSalaries, setFilterDescriptor, setIsLoading } from '../actions/salaryActions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '25px;'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


class Filter extends React.Component {
  state = {
    filterDescription: '',
  };

  componentWillMount() {
    this.setState({ filterDescription: this.props.filterType })
    this.props.fetchTeams();
  }


  handleChange = event => {
    const { filterType } = this.props;
    const filterChoices = this.props[`${filterType}s`];
    const chosenItem = filterChoices.find(choice => choice.name_abbreviated === event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    this.props.setIsLoading();
    if (chosenItem) {
      this.props.setFilterDescriptor(chosenItem.name);
    } else {
      this.props.setFilterDescriptor('All')
    }
    this.props.fetchSalaries(filterType, event.target.value);
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

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">{ this.props.filterType === 'position' ? 'Positions' : 'Teams' }</InputLabel>
          <Select
            value={this.state.filterDescription}
            onChange={this.handleChange}
            inputProps={{
              name: 'filterDescription'
            }}
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
  const { teams, filterType, positions, filterDescriptor } = rootReducer.salaryReducer
  return {
    positions,
    teams,
    filterType,
    filterDescriptor
  }
}

export default connect(mapStateToProps, { fetchTeams, fetchPositions, fetchSalaries, setFilterDescriptor, setIsLoading })(withStyles(styles)(Filter));
