const express = require('express');
const app = express();
const generalRoutes = require('./routes');

app.use(express.json());

generalRoutes(app);

app.listen(3000, () => {
    console.log('listening on port 3000' );
});