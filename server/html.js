const http = require ('http');

const host = 'localhost'
const port = 8000

const requestListener = (request,response) => {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
     console.log(`I am here! Find me running on http://${host}:${port}`);
});