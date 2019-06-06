/*!
 * banner:
 * backend: 1.0.0
 * ISC
 */
exports.id = "main";
exports.modules = {

/***/ "./src/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http_shutdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("http-shutdown");
/* harmony import */ var http_shutdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_shutdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app.js");
/* harmony import */ var _api_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/api/v1.js");






async function createServer() {
  // .extend adds a .withShutdown prototype method to the Server object
  http_shutdown__WEBPACK_IMPORTED_MODULE_1___default.a.extend(); // Init Express

  const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
  const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])(); // Setup Express app

  Object(_app__WEBPACK_IMPORTED_MODULE_3__["default"])(app, router); // Create HTTP server

  const server = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer().withShutdown(); // Install API

  Object(_api_v1__WEBPACK_IMPORTED_MODULE_4__["default"])(router);
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
    const bind = typeof addr === 'string' ? 'Pipe ' + addr : addr ? 'Port ' + addr.port : 'null'; // handle specific listen errors with friendly messages

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

/* harmony default export */ __webpack_exports__["default"] = (createServer);

/***/ })

};
//# sourceMappingURL=main.4f6be210ceb6af1737cc.hot-update.js.map