// const supertest = require("supertest")
// const server = require("../server")
// const db = require("../database/dbConfig")


// beforeEach(async () => {
//     await db.migrate.latest()
    
// })

// afterAll(async () => {
//     await db.destroy()
// })

// describe("Auth register test", ()=> {
//     it("POST /register", async () =>{
//         const data = {username: "alostnight1", password: "abc123", email: "test@email.com"}
//         const res = await supertest(server).post("/api/auth/register").send(data)
//         expect(res.statusCode).toBe(201)
//     })

//     it("POST /login", async () =>{
//         const data = {username: "alostnight1", password: "abc123"}
//         const res = await supertest(server).post("/api/auth/login").send(data)
//         expect(res.statusCode).toBe(200)
//     })
// })

// describe("Get users tests", ()=> {
//     it("POST /login", async () =>{
//         const data = {username: "alostnight1", password: "abc123"}
//         const res = await supertest(server).post("/api/auth/login").send(data)
//         expect(res.statusCode).toBe(200)
//     })

//     it("GET /users", async () =>{
//         const res = await supertest(server).get("/api/users")
//         expect(res.statusCode).toBe(200)
//     })


// })

// describe("create a post tests", ()=> {

//     it("POST /login", async () =>{
//         const data = {username: "alostnight1", password: "abc123"}
//         const res = await supertest(server).post("/api/auth/login").send(data)
//         expect(res.statusCode).toBe(200)
//     })
    
//     it("POST /posts", async () =>{
//         const data = {user_id: 1, title: "How to this", contents: "New Content"}
//         const res = await supertest(server).post("/api/posts").send(data)
//         expect(res.statusCode).toBe(201)
//     })


// })