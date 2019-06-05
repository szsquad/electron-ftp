import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import profile from '@/renderer/asset/profile.png';
import { IState } from '@/renderer/context';
import { consumer } from '@/renderer/context/consumer';
import './index.less';

interface IProps extends RouteComponentProps, IState{}

@(consumer as any)
@(withRouter as any)
class Home extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
    this.state = {};

    // 构建并上传ftp 成功
    ipcRenderer.on('buildAndUploadDone', (event, arg) => {
      console.log(arg);
    });
  }

  sendMessage = (url: string) => {
    ipcRenderer.send('buildAndUpload', url);
  }

  render() {
    const { history, projectUrls } = this.props;
    let projects: string[] = projectUrls.split(',').filter(pro => pro !== '');

    return (
      <div className="home">
        <ul>
          {
            projects.map((project, key) => (
              <li key={key}>
                <div>{project}</div>
                <button onClick={() => this.sendMessage(project)}>打包</button>
              </li>
            ))
          }
        </ul>
        <img alt="" src={profile} onClick={() => { history.push('/profile'); }} />
      </div>
    );
  }
}

export default Home