/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row chatInput-component">
            <div className="col-xs-10">
                <textarea className="form-control" rows="2"></textarea>
            </div>
            <div className="col-xs-2">
                <button className="btn btn-primary send-btn">Send</button>
            </div>
        </div>
    );
};

export default render;
