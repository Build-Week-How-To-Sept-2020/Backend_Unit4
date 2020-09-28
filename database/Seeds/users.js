const bc = require("bcryptjs")

exports.seed = async function(knex) {

  const hashedpass = bc.hashSync("abc123", 10)
  await knex("users").insert([
    {username: "alostnight1", password: hashedpass, email: "test1@email.com", joined: "2020-09-24 01:06:03"},
    {username: "alostnight2", password: hashedpass, email: "test2@email.com", joined: "2020-09-25 01:06:03"},
    {username: "alostnight3", password: hashedpass, email: "test3@email.com", joined: "2020-09-26 01:06:03"}
  ])
  
};;
