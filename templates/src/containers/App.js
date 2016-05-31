import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

export default class extends React.Component {
  render() {
    return (
      <Provider store={this.store}>
      </Provider>
    );
  }
}
