import React from 'react';
import { render } from 'react-dom';
import { ipcRenderer } from 'electron';

ipcRenderer.on('result', (event, arg) => {
  console.log(arg) // prints "pong"
})

class App extends React.Component {
  constructor() {
    super();
    const projects = window.localStorage.projectUrls.split(',');
    this.state = {
      projects,
    }
  }

  sendMessage = (url) => {
    console.log('发送消息....');
    
    ipcRenderer.send('projectUrl', url)
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

render(<App />, document.getElementById('root'));
if (module.hot) module.hot.accept() 
