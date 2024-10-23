const { createServer } = require('micro');
const { handler } = require('./my-function');

const server = createServer(handler);
server.listen(3000, () => console.log('Server listening on port 3000'));
