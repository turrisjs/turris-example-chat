/*

*/
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
/* istanbul ignore if  */
if (__WEBPACK__) {
    require('./style.less');
}

const UserListComponent = React.createClass({
    getInitialState() {
        return {
            users: [{
                username: 'Username',
            }, {
                username: 'Other username',
            }]
        };
    },
    render: Template,
});

export default UserListComponent;
