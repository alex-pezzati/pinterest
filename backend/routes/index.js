const express = require('express');
const { route } = require('./api');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get('/hello/world', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});


if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // serves the front end's index.html at the root route
    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });

    // serves the static assets in the front end's /build folder
    router.use(express.static(path.resolve("../frontend/build")));

    // serves the front end's index.html at all other routes not starting with /api
    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}


// add xsrf-token if in development
if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
      res.cookie('XSRF-TOKEN', req.csrfToken());
      return res.json({});
    });
}


module.exports = router;
