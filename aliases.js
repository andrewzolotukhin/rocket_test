const path = require('path');

module.exports = function (min) {
    return min ? {
        'common': path.resolve(__dirname, 'common/dist')
    } : {
            'common': path.resolve(__dirname, 'common/src')
        }
};