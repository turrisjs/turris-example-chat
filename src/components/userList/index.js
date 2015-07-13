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

const UserListComponent = React.createClass({
    getInitialState() {
        this.sub = rxmq
            .channel('chat').subject('users')
            .subscribe(this.handleUser);
        return {users: {}};
    },
    componentWillUnmount() {
        this.sub.dispose();
    },
    handleUser(user) {
        const {users} = this.state;
        if (user.action === 'joined') {
            users[user.username] = user;
        } else {
            delete users[user.username];
        }
        this.setState({users});
    },
    getValues() {
        const {users} = this.state;
        const configs = {};
        Object.keys(users).forEach(key => {
            const user = users[key];
            configs[user.username] = {
                opacity: {val: 1},
                data: user,
            };
        });
        return configs;
    },
    willEnter(username) {
        return {
            opacity: {val: 0},
            data: this.state.users[username],
        };
    },
    willLeave(username, destVals, currVals) {
        if (currVals[username].opacity.val > 0) {
            return {
                opacity: {val: 0},
                data: currVals[username].data,
            };
        }
    },
    render: Template,
});

export default UserListComponent;
