import bodyParser from 'body-parser';
import { renderFile } from 'ejs';

const setUp = (app, router) => {
    app.use(function (req, res, next) {
        let start = Date.now();
        res.on('finish', function () {
            let duration = Date.now() - start;
            console.log(`${req.method} URL ${req.url} duration: ${(duration / 1000).toFixed(2)} seconds.`);
        });
        next();
    });

    app.engine('html', renderFile);

    const rawBodySaver = function (req, res, buf, encoding) {
        if (buf && buf.length) {
            req.bodyRaw = buf.toString(encoding || 'utf8');
        }
    };

    app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
    app.use(bodyParser.json({ verify: rawBodySaver, limit: '15mb' }));
    app.use('/api/', router);
};

export default setUp;