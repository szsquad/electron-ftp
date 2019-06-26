import React, { useCallback, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Modal, Button, Input } from 'antd';
import { remote } from 'electron';
import { IState, projectType } from '@/renderer/context';
import consumer from '@/renderer/context/consumer';

import './index.less';

interface Props extends RouteComponentProps, IState { }

const Profile2: React.FC<Props> = ({ projects, setProjects, history }) => {
  const [selectedProjects, setSelectedProjects] = useState<projectType[]>([]); // 选择文件夹
  const [isShowModal, triggerIsShowModal] = useState<boolean>(false); // 是否显示modal
  const [projectName, setProjectName] = useState<string>(''); // input输入框得文件名
  const [currentOperatePro, setCurrentOperatePro] = useState<string>(''); // 当前要添加项目名得文件

  // 选择文件夹
  const chooseWorkPlace = useCallback(() => {
    const { dialog } = remote;
    dialog.showOpenDialog({
      properties: [
        'openDirectory',
      ],
    },
      (filePath) => {
        // setProjectUrls(`${projects},${filePaths}`);
        const newSelectedProjects = [...selectedProjects];
        newSelectedProjects.push({ directoryPath: (filePath as any), projectName: '' });
        setSelectedProjects(newSelectedProjects);
      });
  }, [selectedProjects]);

  // 添加到context
  const submit = useCallback(() => {
    const newProjects = [...selectedProjects];
    newProjects.concat(selectedProjects);
    setProjects(newProjects);
  }, [selectedProjects, setProjects]);

  // 添加文件名
  const addProjectName = useCallback(() => {
    const index = selectedProjects.findIndex(({ directoryPath }) => directoryPath === currentOperatePro);

    const newProjects = [...projects];
    newProjects[index].projectName = projectName;
    newProjects.concat(selectedProjects);
    setSelectedProjects(newProjects);
    triggerIsShowModal(false);
  }, [currentOperatePro, projectName, projects, selectedProjects]);

  return (
    <div className="profile">
      <button onClick={() => { history.goBack(); }}>返回</button>
      <button onClick={() => chooseWorkPlace()}>添加项目</button>
      <div>
        <h3>已选择的项目</h3>
        <ul>
          {
            selectedProjects.map((pro, key) => (
              <li key={key}>
                <span>{pro.directoryPath}</span>
                <span>{pro.projectName}</span>
                <Button onClick={() => {
                  triggerIsShowModal(!isShowModal);
                  setCurrentOperatePro(pro.directoryPath);
                }}
                >
                  添加项目名
                </Button>
              </li>
            ))
          }
        </ul>
      </div>
      <div onClick={submit}>确定添加</div>
      <Modal
        title="添加项目名"
        style={{ marginLeft: 8 }}
        visible={isShowModal}
        onCancel={() => triggerIsShowModal(false)}
        onOk={addProjectName}
      >
        <Input onChange={e => setProjectName(e.target.value)} />
      </Modal>
    </div>
  );
};

export default consumer(withRouter(Profile2));
