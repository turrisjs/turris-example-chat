/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row userList-component">
            {this.state.users.map((user, i) => (
                <div className="row" key={'user_' + i}>
                    <b className="label label-primary">{user.username}</b>
                </div>
            ))}
        </div>
    );
};

export default render;
