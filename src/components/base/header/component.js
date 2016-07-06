import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as FlightsActions from '../../../actions/index'


class Header extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeCarrier = this.onChangeCarrier.bind(this);
  }

  onChangeCarrier(e) {
    this.props.filterFlights(e.target.value);
  }

  render() {
    const { flights } = this.props;
    const carriers = [...new Set(flights.map(flight => flight.carrier))];
    
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Flights</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <div className="col-xs-5">
              <select className="form-control flight-select" onChange={this.onChangeCarrier}>
                <option value="">All companies</option>
                {
                  carriers.map((carrier, key) => 
                    <option key={key} value={carrier}>{carrier}</option>
                  )
                }
              </select>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  filterFlights: PropTypes.func
};

function mapStateToProps(state) {
  return {
    isFetched: state.flights.isFetched,
    flights: state.flights.result
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FlightsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
