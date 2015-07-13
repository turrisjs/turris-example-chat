/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row chatLog-component">
            <div className="col-xs-12">
                {this.state.messages.map((msg, i) => (
                    <div className="row" key={'msg_' + i}>
                        <div className="col-xs-12">
                            <small>[{msg.time}]</small> <b>{msg.user}: </b> {msg.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default render;
