/*

*/
import React from 'react';
import rxmq from 'rxmq';
import _ from 'lodash';
import Template from './template.jsx';

// only load style when using webpack
/* istanbul ignore if  */
if (__WEBPACK__) {
    require('./style.less');
}

const UserListComponent = React.createClass({
    getInitialState() {
        this.sub = rxmq
            .channel('chat').subject('users')
            .subscribe(this.handleUser);
        return {
            users: []
        };
    },
    componentWillUnmount() {
        this.sub.dispose();
    },
    handleUser(user) {
        const {users} = this.state;
        if (user.action === 'joined') {
            users.push(user);
        } else {
            _.remove(users, {username: user.username});
        }
        this.setState({users});
    },
    render: Template,
});

export default UserListComponent;
