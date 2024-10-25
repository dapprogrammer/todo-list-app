import mongoose from "mongoose";

export default function connect() {
  const database =
    "mongodb+srv://drainbastasa1256:QZNPxao16joMGge3@cluster0.wbwq3.mongodb.net/?retryWrites=true&w=majority&appName=TodoListApp";
  mongoose
    .connect(database, {

      /* I get a warning that this has now have no effect for the latest version of mongoose
      useNewUrlParser: true,
      useUnifiedTopology: true,
      */
      dbName: "todos",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
}
