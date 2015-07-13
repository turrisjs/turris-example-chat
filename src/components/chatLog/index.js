/*

*/
import React from 'react';
import rxmq from 'rxmq';
import Template from './template.jsx';
// only load style when using webpack
/* istanbul ignore if  */
if (__WEBPACK__) {
    require('./style.less');
}

const ChatLogComponent = React.createClass({
    getInitialState() {
        this.sub = rxmq
            .channel('chat').subject('messages')
            .subscribe(this.handleMessage);
        return {messages: {}};
    },
    componentWillUnmount() {
        this.sub.dispose();
    },
    handleMessage(msg) {
        const {messages} = this.state;
        messages[msg.text + msg.user] = msg;
        this.setState({messages});
    },
    getValues() {
        const {messages} = this.state;
        const configs = {};
        Object.keys(messages).forEach(key => {
            const msg = messages[key];
            configs[msg.text + msg.user] = {
                opacity: {val: 1},
                data: msg,
            };
        });
        return configs;
    },
    willEnter(txt) {
        return {
            opacity: {val: 0},
            data: this.state.messages[txt],
        };
    },
    render: Template,
});

export default ChatLogComponent;
