import express, { Router } from 'express';
import httpShutdown from 'http-shutdown';
import http from 'http';
import setUp from './app';
import v1 from './api/v1';

async function createServer() {
    // .extend adds a .withShutdown prototype method to the Server object
    httpShutdown.extend();

    // Init Express
    const app = express();

    const router = Router();
    // Setup Express app
    setUp(app, router);
    // Create HTTP server
    const server = http.createServer().withShutdown();
    // Install API
    v1(router);

    /**
     * Setup exit handlers
     */
    process.on('SIGTERM', () => exitHandler());
    process.on('SIGINT', () => exitHandler());
    process.on('exit', () => exitHandler());

    /**
     * Event listener for HTTP server "error" event.
     */
    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        const addr = server.address();
        const bind = typeof addr === 'string' ? 'Pipe ' + addr : (addr ? 'Port ' + addr.port : 'null');

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.log(`${bind} requires elevated privileges`);
                process.exit(1);
                break;

            case 'EADDRINUSE':
                console.log(`${bind} is already in use`);
                process.exit(1);
                break;

            default:
                throw error;
        }
    }

    /**
     * Event listener for HTTP server "listening" event.
     */
    function onListening() {
        const addr = server.address();
        const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        console.log(`Listening on ${bind}`);
    }

    function exitHandler() {
        console.log(`Shutting down HTTP server...`);
        server.shutdown(() => process.exit(7));
    }

    server.on('request', app);
    server.on('error', onError);
    server.on('listening', onListening);

    server.listen(8000, '127.0.0.1');
}

export default createServer;
