import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as FlightsActions from '../../actions/index'


class Base extends Component {
  
  componentWillMount() {
    this.props.socketConnect();
  }
  
  render() {
    const { isFetched, main, header } = this.props;
    
    if (!isFetched) {
      return <div>Loading...</div>;
    }
    
    return (
      <div id="wrap" className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            {header ? header : null}
            {main ? main : null}
          </div>
        </div>
      </div>
    )
  }
}

Base.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  socketConnect: PropTypes.func,
  header: PropTypes.object,
  main: PropTypes.object
};

function mapStateToProps(state) {
  return {
    isFetched: state.flights.isFetched
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FlightsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Base)
