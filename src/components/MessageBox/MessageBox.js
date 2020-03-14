import React from 'react';
import Classes from './MessageBox.module.css';

class MessageBox extends React.Component {
  renderMessages = () => {};

  render() {
    return (
      <div className={Classes.MessageBox} data-test='component-message-box'>
        {this.renderMessages()}
      </div>
    );
  }
}

export default MessageBox;
