const moduleAlias = require('module-alias');
const path = require('path');
const aliases = require('../../aliases');
const argv = require('yargs').argv;

const root = path.resolve(__dirname, '../../');

moduleAlias.addAliases(Object.assign({}, {
    '@root': root
}, aliases(argv.minLibs), {
        'randomstring': path.resolve(__dirname, root, 'common/node_modules/randomstring'),
    }));

require('./main').default();