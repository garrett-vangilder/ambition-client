import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts';
import _ from 'lodash';


class Chart extends Component {
  fetchConfig() {
    if (!this.props.salaries) return;
    const categories = [];
    const salaries = [];

    _.map(this.props.salaries, (salary) => {
      categories.push(salary.description);
      salaries.push(salary.value_in_dollars);
    })
    
    return {
      xAxis: {
        categories
      },
      chart: {
        type: 'bar'
      },
      series: [{
        data: salaries
      }]
    }
  }
  render() {
    return (
      <div>
        <ReactHighcharts config={this.fetchConfig()} />
      </div>);
  }
}

const mapStateToProps = ({ rootReducer }) => {
  const { salaries } = rootReducer.salaryReducer;
  return {
    ...this.state,
    salaries
  };
};

export default connect(mapStateToProps, null)(Chart);