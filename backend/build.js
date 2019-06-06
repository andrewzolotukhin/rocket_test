const { backendCompiler, getArgs } = require('rocket-starter');
const fs = require('fs');
const aliases = require('../aliases');
const args = getArgs();
const minLibs = !!args.minLibs;
const debugmode = !!args.debugmode;

backendCompiler({
    src: './src/main.js',
    nodemon: './dist/index.js',
    debug: debugmode,
    copy: {
        from: './src/index.js',
        to: './'
    }
}, finalConfig => {
    finalConfig.output.libraryTarget = 'umd';

    Object.assign(finalConfig.resolve, {
        alias: aliases(minLibs)
    });

    finalConfig.externals = fs.readdirSync("node_modules")
        .concat(fs.readdirSync("../common/node_modules"))
});