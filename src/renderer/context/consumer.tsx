import React from 'react';
import { Consumer, IState } from './index';

export function consumer<P>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P> {
  return class extends React.Component<P> {
    render() {
      return (
        <Consumer>
          {(contextStore: IState & any) => {
            return <WrappedComponent {...contextStore} {...this.props} />
          }}
        </Consumer>
      )
    }
  }
}
