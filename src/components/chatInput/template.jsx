/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row chatInput-component">
            <div className="col-xs-10">
                You are: <span className="label label-default">{this.state.currentUser}</span>, type something:
                <textarea ref="message" className="form-control" rows="2"></textarea>
            </div>
            <div className="col-xs-2">
                <button className="btn btn-primary send-btn" onClick={this.handleSend}>Send</button>
            </div>
        </div>
    );
};

export default render;
