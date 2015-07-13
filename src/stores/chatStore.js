/* Chat store that handles all the logic */
import rxmq from 'rxmq';

const chatChannel = rxmq.channel('userList');

chatChannel.subject('action').subscribe(({option}, envelope) => {
    // ...
});

export default chatChannel;
