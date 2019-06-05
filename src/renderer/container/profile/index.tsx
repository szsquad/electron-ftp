import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { remote } from 'electron';
import { IState } from '@/renderer/context';
import { consumer } from '@/renderer/context/consumer';

interface IProps extends RouteComponentProps, IState{}

@(consumer as any)
@(withRouter as any)
export default class Profile extends React.Component<IProps> {

  chooseWorkPlace = () => {
    const { projectUrls, setProjectUrls } = this.props;
    const { dialog } = remote;
    dialog.showOpenDialog({
      properties: [
        "openDirectory"
      ],
    },
      (filePaths) => {
        setProjectUrls(`${projectUrls},${filePaths}`)
      })
  }

  render() {
    const { history } = this.props;

    return (
      <div>
        <button onClick={() => { history.goBack(); }}>返回</button>
        <button onClick={() => this.chooseWorkPlace()}>添加项目</button>
      </div>

    )
  }
}