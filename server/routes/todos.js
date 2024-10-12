
const todosRouter = express.Router();
import express from "express";


// reading all todo items
todosRouter.get('/todos', (req, res) => {
  res.send("All Todos");
});
// getting specific todo item with id as parameter
todosRouter.get('/todos/:id', (req, res) => {
  // get the todo id from the url
  const todoId = req.params.id;
 
  res.send(`Getting todo with id ${todoId}`);
});
 
 
// creating a new todo item
todosRouter.post('/todos', (req, res) => {
  // get the data from the request body
  const data = req.body;
  console.log(data);
  // send back the data
  res.json({
    id: 1,
    title: "Todo",
    description: "My todo",
  });
});
// updating a todo item
todosRouter.put('/todos/:id', (req, res) => {
  // get the todo id from the url
  const todoId = req.params.id;

  res.send(`Updating TODO with id ${todoId}`);
});

// deleting a todo item
todosRouter.delete('/todos/:id', (req, res) => {
  // get the todo id from the url
  const todoId = req.params.id;

  res.send(`Deleting TODO with id ${todoId}`);
});


export default todosRouter;
