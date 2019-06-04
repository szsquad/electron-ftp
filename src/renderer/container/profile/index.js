import React from 'react';
import { withRouter } from 'react-router-dom';
import { remote } from 'electron';
import { consumer } from '../../context/consumer';

@consumer
@withRouter
export default class Profile extends React.Component {

  chooseWorkPlace = () => {
    const { setProjectUrls, projectUrls } = this.props;
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