import http from 'http';
import server from './server';

/**
 * Used for Node to access http connections and maybe create httpsServer
 */
const Server: http.Server = http.createServer(server);

/**
 * Binds and listens for connections on the specified host
 */
Server.listen(server.get('port'));