import React, { useCallback, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import profile from '@/renderer/assets/profile.png';
import { IState } from '@/renderer/context';
import consumer from '@/renderer/context/consumer';
import './index.less';

interface Props extends RouteComponentProps, IState { }

const Home: React.FC<Props> = ({ history, projects }) => {
  useEffect(() => {
    ipcRenderer.on('buildAndUploadDone', (event, arg) => {
      console.log(arg);
    });
  });

  const sendMessage = useCallback((url: string) => {
    ipcRenderer.send('buildAndUpload', url);
  }, []);

  return (
    <div className="home">
      <h3>项目列表</h3>
      <ul>
        {
          projects.map(({ project, directoryPath }, key) => (
            <li key={key}>
              <div>
                <span>{project}</span>
                <button onClick={() => sendMessage(directoryPath)}>打包</button>
              </div>
              <p>{directoryPath}</p>

            </li>
          ))
        }
      </ul>
      <img alt="" src={profile} onClick={() => { history.push('/profile'); }} />
    </div>
  );
};

export default consumer(withRouter(Home));
