const express = require('express');
require('dotenv').config();
const massive = require('massive');
const session = require('express-session');
const ctrl = require('./controller')
const { SERVER_PORT, CONNECTION_PORT, SECRET } = process.env;

const app = express();
app.use(express.json());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)

app.get('/api/posts/:userid', ctrl.getAll)







massive(CONNECTION_PORT).then(connection => {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => {
        console.log(`Last Simulation for ${SERVER_PORT} years!`)
    })
}).catch(err => console.log(err))