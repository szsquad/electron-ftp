import React from 'react';
import { Consumer } from './index';

export const consumer = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {(contextStore) => {
            return <WrappedComponent {...contextStore} />
          }}
        </Consumer>
      )
    }
  }
}