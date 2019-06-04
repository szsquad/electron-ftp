import React from 'react';
import { withRouter } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import profile from '../../asset/profile.png';
import { consumer } from '../../context/consumer';
import './index.less';

@consumer
@withRouter
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {}

    // 构建并上传ftp 成功
    ipcRenderer.on('buildAndUploadDone', (event, arg) => {
      console.log(arg)
    })

  }

  sendMessage = (url) => {
    ipcRenderer.send('buildAndUpload', url)
  }

  render() {
    const { history, projectUrls } = this.props;
    const project = projectUrls.split(',').filter(pro => pro !== '');

    return (
      <div className="home">
        <ul>
          {
            project.map((project, key) => <li key={key}>
              <div>{project}</div>
              <button onClick={() => this.sendMessage(project)}>打包</button>
            </li>)
          }
        </ul>
        <img src={profile} onClick={() => { history.push('/profile') }} />
      </div >
    )
  }
}