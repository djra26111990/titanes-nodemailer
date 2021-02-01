const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const SendRoute = require('./routes/sendRoute.route')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: false
}))

const PORT = process.env.SERVER_PORT || 5000
const HOST = '0.0.0.0'

const uri = process.env.ATLAS_URI;

app.post('/send', SendRoute);

app.listen(PORT, HOST, () => {
    console.log(`🚀 Service mailer está activo en https://${HOST}:${PORT}`);
});
