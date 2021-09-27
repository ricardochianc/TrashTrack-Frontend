require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const root = path.join(__dirname, 'client', 'build');

app.use(express.static(root));
app.use(cors());
app.use(bodyParser());

app.listen(process.env.PORT || 8080, () => {
    console.log('Running on port 8080');
});

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root});
});

module.exports = app;