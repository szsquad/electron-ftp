import React from 'react';
import { render } from 'react-dom';
import { ipcRenderer } from 'electron';

ipcRenderer.on('result', (event, arg) => {
  console.log(arg) // prints "pong"
})

class App extends React.Component {

  sendMessage = () => {
    ipcRenderer.send('read', 'ping')
  }

  render() {
    return <div>
      <button onClick={this.sendMessage}>Click</button>
    </div >
  }
}

render(<App />, document.getElementById('root'));
if (module.hot) module.hot.accept() 
