import express from "express";
const router = express.Router();

router.get("/todos", (req, res) => {
  res.send("All Todos");
});

router.get("/todos/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Getting TODO with id ${id}`);
});

router.post("/todos", (req, res) => {
  res.send({ id: 1, title: "Todo", description: "My todo" });
});

router.put("/todos/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Updating TODO with id ${id}`);
});

router.delete("/todos/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Deleting TODO with id ${id}`);
});

export default router;

























/*

WEEK 12 Assignment


import express from "express";
const router = express.Router();
import Todo from "../models/todo.js";

router.get("/todos/:userId", async (req, res) => {
  const userId = req.params.userId;
  const todoId = req.query.id; // extracts the id from the query string of the URL (like ?id=TODO_ID)

   // TODO: read the todo item, of the user with the given todo id. If the todoId is not defined (meaning no query variable) return all todo items for the user instead.
  try {
    if (todoId) {
      const todo = await Todo.findOne({ _id: todoId, Owner: userId });
      if (!todo) {
        return res.status(404).json({ error: "Todo item not found" });
      }
      return res.json(todo);
    } else {
      const todos = await Todo.find({ Owner: userId });
      return res.json(todos);
    }
  } catch (error) {
    return res.status(400).json({ error: "Error retrieving todo items" });
  }
});

router.post("/todos/:userId", async (req, res) => {
  const userId = req.params.userId;
  
  // TODO: get the todo object from the request body
  const { Title, Description } = req.body;
  // TODO: create todo to mongodb with the user id above.
  try {
    const newTodo = await Todo.create({
      Owner: userId,
      Title,
      Description,
    });
    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.put("/todos/:userId/:todoId", async (req, res) => {
  const userId = req.params.userId;
  const todoId = req.params.todoId;

  // TODO: get the updated todo object from the request body
  const updatedTodo = req.body;
  // TODO: updated the todo.
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: todoId, Owner: userId },
      updatedTodo,
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({ error: "Todo item not found" });
    }
    return res.json(todo);
  } catch (error) {
    return res.status(400).json({ error: "Error updating todo item" });
  }
});

router.delete("/todos/:todoId", async (req, res) => {
  const todoId = req.params.todoId;

  // TODO: Delete the todo item by id.
  try {
    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo item not found" });
    }
    return res.json({ message: "Todo item deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: "Error deleting todo item" });
  }


});

export default router;


*/





/*
WEEK 9 TASK!!!!!!!

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


*/