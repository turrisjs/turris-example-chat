/*

*/
import React from 'react';
import {TransitionSpring} from 'react-motion';

const render = function() {
    return (
        <div className="row userList-component">
            <TransitionSpring endValue={this.getValues} willLeave={this.willLeave} willEnter={this.willEnter}>
                {configs =>
                    <div className="col-xs-12">
                        {Object.keys(configs).map((it, i) => {
                            const config = configs[it];
                            const {data: user, opacity} = config;
                            const style = {opacity: opacity.val};
                            return (
                                <div className="row" style={style} key={'user_' + i}>
                                    <b className="label label-primary">{user.username}</b>
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
