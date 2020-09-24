const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("./middleware/logger")
const usersRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");
const postsRouter = require("./posts/posts-router")

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger())

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);
server.use("/api/users/:id/posts", postsRouter);

server.get("/", (req, res) => res.json({ api: "up" }));

module.exports = server;  