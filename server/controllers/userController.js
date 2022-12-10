const db = require('../models');

module.exports = {
    findCurrent: (req, res) => {
        db.User.find({ _id: req.session.passport.user })
        .then((data) => {
            res.json(data)
        })
        .catch(err => console.log(err))
    }
}
