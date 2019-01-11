const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const userArr = await db.find_user({ username })
        if (userArr.length >= 1) {
            return res.status(200).send({ message: 'Username Is Already Used' });
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUserArr = await db.create_user({ username, hash });
        req.session.user = { id: newUserArr[0].id, username: newUserArr[0].username }
        res.status(200).send({ message: 'Logged In', userData: req.session.user, loggedIn: true })
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const userArr = await db.find_user({ username });
        if (!userArr[0]) {
            return res.status(200).send({ message: 'Username not found' });
        }
        const found = bcrypt.compareSync(password, userArr[0].hash)
        if (!found) {
            return res.status(401).send({ message: 'Password Incorrect' })
        }
        req.session.user = { id: userArr[0].id, username: userArr[0].username }
        res.status(200).send({ message: 'Logged In', userData: req.session.user, loggedIn: true })
    },
    getAll: async (req, res) => { 
        if(req.session.user){
            res.status(200).send(req.session.user)
        }else{
            res.status(401).send('Please Log In')
        }
    }
}