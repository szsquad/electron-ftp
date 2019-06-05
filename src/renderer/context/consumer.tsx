import React from 'react';
import { Consumer, IState } from './index';

export default function consumer<P>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P> {
  return class extends React.Component<P> {
    render() {
      return (
        <Consumer>
          {(contextStore: IState & any) => <WrappedComponent {...contextStore} {...this.props} />}
        </Consumer>
      );
    }
  };
}
