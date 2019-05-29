import React from 'react';
import './index.less';

export default class Home extends React.Component {
  constructor() {
    super();
    const projects = (window.localStorage.projectUrls || '').split(',');
    this.state = {
      projects,
    }
  }

  render() {
    const { projects } = this.state;
    return (
      <div>
        <ul>
          {
            projects.map((project, key) => <li key={key}>
              <div>{project}</div>
              <button onClick={() => this.sendMessage(project)}>打包</button>
            </li>)
          }
        </ul>
      </div >
    )
  }
}