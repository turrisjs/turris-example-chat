/* Chat store that handles all the logic */
import rxmq from 'rxmq';
import Rx from 'rx';
import moment from 'moment';
import socketClient from 'socket.io-client/socket.io';

// init channel
const chatChannel = rxmq.channel('chat');
// subject streams
const statusStream = chatChannel.subject('status');
const usersStream = chatChannel.subject('users');
const profileStream = chatChannel.subject('profile');
const chatStream = chatChannel.subject('messages');
const sendStream = chatChannel.subject('send');

// connect to server
const socket = socketClient('http://localhost:8081');

// convert connect/disconnect into Observables
const connect = Rx.Observable.fromEvent(socket, 'connect').map(() => true);
const disconnect = Rx.Observable.fromEvent(socket, 'disconnect').map(() => false);
// multicast into status stream
const status = connect.merge(disconnect).multicast(statusStream).connect();

// name handling
const name = Rx.Observable.fromEvent(socket, 'name');
name.multicast(profileStream).connect();

// chat messages handling
const chatMessage = Rx.Observable.fromEvent(socket, 'chat message').map((msg) => {
    msg.time = moment().calendar();
    return msg;
});
chatMessage.multicast(chatStream).connect();

// users
const newUser = Rx.Observable.fromEvent(socket, 'user joined').map((username) => {
    return {action: 'joined', username};
});
const userLeft = Rx.Observable.fromEvent(socket, 'user left').map((username) => {
    return {action: 'left', username};
});
const users = newUser.merge(userLeft).multicast(usersStream).connect();

// handle sending
sendStream.subscribe((msg) => {
    console.log('sending: ', msg);
    socket.emit('chat message', msg);
});

export default chatChannel;
