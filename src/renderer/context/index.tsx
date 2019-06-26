/* eslint-disable */
import React, { createContext, Component } from 'react';

const context = createContext({});

export type projectType = { projectName: string, directoryPath: string };

export interface IState {
  projects: projectType[],
  /**
   * 设置项目路径
   */
  setProjects: (projectUrl: projectType[]) => void
}

export class ContextProvider extends Component<any, IState> {
  setProjects = (projects) => {
    this.setState({ projects }, () => {
      window.localStorage.setItem('projects', projects);
    });
  }

  state = {
    projects: JSON.parse(window.localStorage.getItem('projects')),
    setProjects: this.setProjects,
  }

  render() {
    const { children } = this.props;
    return (
      <context.Provider value={this.state}>
        {children}
      </context.Provider>
    );
  }
}

export const { Consumer } = context;
