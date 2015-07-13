/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row userList-component">
            {this.state.users.map((user) => (
                <div className="row">
                    <b className="label label-primary">{user.username}</b>
                </div>
            ))}
        </div>
    );
};

export default render;
