const server = require("../server");

const router = require("express").Router();

const users = require("./users-model");

router.get("/", (req, res) => {
    users.getUsers()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ message: "Error retrieving users"}))
});

module.exports = router;  