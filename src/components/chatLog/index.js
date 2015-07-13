/*

*/
import React from 'react';
import moment from 'moment';
import Template from './template.jsx';
// only load style when using webpack
/* istanbul ignore if  */
if (__WEBPACK__) {
    require('./style.less');
}

const ChatLogComponent = React.createClass({
    getInitialState() {
        return {
            messages: [{
                time: moment().calendar(),
                text: 'I am text',
                user: 'username'
            }, {
                time: moment().calendar(),
                text: 'I am other text',
                user: 'Other username'
            }],
        };
    },
    render: Template,
});

export default ChatLogComponent;
