const { frontendCompiler, getArgs } = require('rocket-starter');
const aliases = require('../aliases');
const path = require('path');

const args = getArgs();
const logging = !!args.logging;
const debugmode = !!args.debugmode;
const minLibs = !!args.minLibs;

let global = {};

if (logging) {
    global.LOGGING_ACTIVATION = 'LOGGING_ACTIVATION';
}

if (debugmode) {
    global.DEBUG_MODE = 'DEBUG_MODE';
}

frontendCompiler({
    version: true,
    debug: debugmode,
    styles: 'app.css',
    html: {
        template: path.resolve(__dirname, './index.ejs'),
        favicon: path.resolve(__dirname, './favicon.ico')
    },
    server: {
        port: 3000
    },
    global
}, finalConfig => {
    Object.assign(finalConfig.resolve, {
        alias: aliases(minLibs)
    });
});
