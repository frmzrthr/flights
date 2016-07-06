import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment';

import * as FlightsActions from '../../actions/index'


class Flights extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { flights, carrier } = this.props;

    return (
      <div className="row">
        {
          flights
            .filter((flight, key) =>
              carrier.length === 0 ||
              flight.carrier.toLowerCase() === carrier.toLowerCase()
            )
            .map((flight, key) => {
              return (
                <div key={key} className="col-xs-4">
                  <div className="thumbnail">
                    <div className="caption text-center">
                      <div className="panel panel-info">
                        <h4>{flight.carrier}</h4>
                      </div>
                      <div className="row">
                        <div className="col-xs-5">
                          <h5>{flight.direction.from}</h5>
                        </div>
                        <div className="col-xs-2"><h4>&#9992;</h4></div>
                        <div className="col-xs-5">
                          <h5>{flight.direction.to}</h5>
                        </div>
                      </div>
                      <div className="row text-primary">
                        <div className="col-xs-5">
                          {moment.utc(flight.arrival).format('D MMM, HH:mm')}
                        </div>
                        <div className="col-xs-2"><h4>&#9716;</h4></div>
                        <div className="col-xs-5">
                          {moment.utc(flight.departure).format('D MMM, HH:mm')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
        }
      </div>
    );
  }
}

Flights.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  carrier: PropTypes.string.isRequired,
  flights: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    isFetched: state.flights.isFetched,
    carrier: state.flights.carrier,
    flights: state.flights.result
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FlightsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flights);
