/*

*/
import React from 'react';
import {TransitionSpring} from 'react-motion';

const render = function() {
    return (
        <div className="row chatLog-component">
            <TransitionSpring endValue={this.getValues} willLeave={this.willLeave} willEnter={this.willEnter}>
                {configs =>
                    <div className="col-xs-12">
                        {Object.keys(configs).map((it, i) => {
                            const config = configs[it];
                            const {data: msg, opacity} = config;
                            const style = {opacity: opacity.val};
                            return (
                                <div className="row" style={style} key={'msg_' + i}>
                                    <div className="col-xs-12">
                                        <small>[{msg.time}]</small> <b>{msg.user}: </b> {msg.text}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                }
            </TransitionSpring>
        </div>
    );
};

export default render;
