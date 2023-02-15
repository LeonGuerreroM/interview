const express = require('express');
const app = express();
const generalRoutes = require('./routes');
//const cors = require('cors');

app.use(express.json());

// const whitelist = ['http://localhost:3000', 'https://upiitadigital.com'];
// const options = {
//     origin: (origin, callback) => {
//         if(whitelist.includes(origin) || !origin){
//             callback(null, true);
//         }else{
//             callback(new Error('Access denied'));
//         }
//     }
// }
// app.use(cors(options));

generalRoutes(app);

app.listen(3000, () => {
    console.log('listening on port 3000' );
});