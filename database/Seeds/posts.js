
exports.seed = async function(knex) {
  await knex("posts").insert([
    {user_id: 1, title: "How to do this", contents: "This is how you do this.", created: "2020-09-26 01:23:49"},
    {user_id: 3, title: "How to do that", contents: "This is how you do that", created: "2020-09-27 01:23:49"}  
  ])

}
