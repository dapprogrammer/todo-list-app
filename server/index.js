import express from "express";
import connect from "./database/mongoDB.js";

import todosRouter from "./routes/todos.js";
import usersRouter from "./routes/users.js";

import pageRouter from "./routes/router.js";

const app = express();

const port = 6969;

// Use body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use the static middleware to serve static files
app.use(express.static('frontend'));

app.get("/", (req, res) => {
  res.send("Hello Todo App!!!");
});

app.use("/api", todosRouter);
app.use("/api", usersRouter);
app.use("/api", pageRouter);

// attempt connection to mongodb
connect();

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
