// react
import React from 'react';
import Chrome from '../../components/chrome/index.js';
import Chatlog from '../../components/chatLog';
import ChatInput from '../../components/chatInput';
import UserList from '../../components/userList';

const render = function() {
    return (
        <Chrome>
            <div className="row">
                <div className="col-xs-8">
                    <Chatlog />
                </div>
                <div className="col-xs-4">
                    <UserList />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <ChatInput />
                </div>
            </div>
        </Chrome>
    );
};

export default render;
