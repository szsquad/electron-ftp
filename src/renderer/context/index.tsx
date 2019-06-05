import React, { createContext, Component } from 'react';

const context = createContext({});

export interface IState {
  projectUrls: string
  /**
   * 设置项目路径
   */
  setProjectUrls: (projectUrl: string) => void
}

export class ContextProvider extends Component<any, IState> {

  setProjectUrls = (projectUrls) => {
    this.setState({ projectUrls }, () => {
      window.localStorage.setItem('projectUrls', projectUrls);
    })
  }

  state = {
    projectUrls: window.localStorage.getItem('projectUrls')!,
    setProjectUrls: this.setProjectUrls,
  }

  render() {
    return <context.Provider value={this.state}>
      {this.props.children}
    </context.Provider>
  }
}

export const Consumer = context.Consumer;