const db = require("../database/dbConfig");

module.exports = {
    find,
    findBy,
    findById,
    add,
    getUsers
}

function find() {
    return db("users");
}

function findBy(filter) {
    return db("users").where(filter).first();
}

function findById(id) {
    return db("users").where({ id }).first();
}

function add(user) {
    return db("users")
            .insert(user)
            .then(() => {
                return findBy({username: user.username});
            });
}  

function getUsers(){
    return db("Users").select("id", "Username", "Email", "Joined")
}