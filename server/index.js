
import express from "express";
import todosRouter from "./routes/todos.js";

const app = express();

// define the port
const port = 5000;
 
app.use('/api', todosRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
