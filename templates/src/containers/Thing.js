import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Input from '../components/Input';
import * as ThingActions from '../actions';

const mapStateToProps = (state) => {
  const thing = state.thing;

  return {
    word: thing.currentSlide
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ThingActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenApp);
