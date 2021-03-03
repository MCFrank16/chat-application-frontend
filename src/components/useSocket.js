import io from 'socket.io-client';

const endpoint = 'localhost:9000';

const socket = io(endpoint);

export default socket;
