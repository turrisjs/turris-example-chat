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

const ChatInputComponent = React.createClass({
    getInitialState() {
        this.sub = rxmq
            .channel('chat').subject('profile')
            .subscribe(this.handleName);
        return {currentUser: ''};
    },
    componentWillUnmount() {
        this.sub.dispose();
    },
    handleName(name) {
        this.setState({currentUser: name});
    },
    handleSend() {
        const val = this.refs.message.getDOMNode().value;
        rxmq.channel('chat').subject('send').onNext(val);
        this.refs.message.getDOMNode().value = '';
    },
    render: Template,
});

export default ChatInputComponent;
