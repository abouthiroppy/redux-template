import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Input from '../components/Input';
import * as ThingActions from '../actions';

class ScreenApp extends React.Component {
  render() {
    return (
      <Input />
    );
  }
}

function mapStateToProps(state) {
  const thing = state.thing;

  return {
    word: thing.currentSlide
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ThingActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenApp);
