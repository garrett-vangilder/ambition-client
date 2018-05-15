import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts';
import _ from 'lodash';


class Chart extends Component {
  fetchConfig() {
    if (!this.props.salaries) return;
    const categories = [];
    const salaries = [];

    const title = this.props.filterType === 'position' ? 'Teams' : 'Positions'

    _.map(this.props.salaries, (salary) => {
      categories.push(salary.description);
      salaries.push(salary.value_in_dollars);
    })

    return {
      xAxis: {
        categories
      },
      title: {
        text: `Salaries by ${title} - ${this.props.filterDescriptor ? this.props.filterDescriptor : 'All'}`
      },
      chart: {
        type: 'bar'
      },
      series: [{
        data: salaries
      }],
      legend: {
        enabled: false
      }
    }
  }
  render() {
    if (this.props.salaries.length < 1 || this.props.loading) {
      return (
        <ReactLoading className={"spinner"} type={"spin"} color="#aaa" />
      )
    }
    return (
      <div>
        <ReactHighcharts config={this.fetchConfig()} />
      </div>);
  }
}

const mapStateToProps = ({ rootReducer }) => {
  const { salaries, filterType, filterDescriptor, loading } = rootReducer.salaryReducer;
  return {
    ...this.state,
    salaries,
    filterType,
    filterDescriptor,
    loading
  };
};

export default connect(mapStateToProps, null)(Chart);
