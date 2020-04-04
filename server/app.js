const express = require('express');
const cors = require('cors');
const api = require('./api/user');

const app = express();

app.use(express.json());
app.use(cors());

app.set('jwt_secret', 'jwt_secret');
app.use('/', api);

const port = process.env.PORT || '2333';
app.listen(port, () => console.log(`server is running on ${port}`));
