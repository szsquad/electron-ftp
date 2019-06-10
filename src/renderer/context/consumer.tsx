import React from 'react';
import { Consumer, IState } from './index';

export default function consumer<P>(WrappedComponent: React.ComponentType<P>): React.SFC<IState> {
  // eslint-disable-next-line react/display-name
  return (props: IState) => (
    <Consumer>
      {(contextStore: IState & any) => <WrappedComponent {...contextStore} {...props} />}
    </Consumer>
  );
  // return class HocConsumer extends React.Component<P> {
  //   render() {
  //     return (
  //       <Consumer>
  //         {(contextStore: IState & any) => <WrappedComponent {...contextStore} {...this.props} />}
  //       </Consumer>
  //     );
  //   }
  // };
}
