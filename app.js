const express = require("express");
const app = express();
const routes = require("./routes/routes.js");

app.use(express.json());

//this is the main entry route for operations
app.use("/BookStore/", routes);

app.listen(3000, () => {
  console.log("Starting server at port 3000");
});

/** The routes for the api are given as:
 * BookStore/Books  ---> GET operation to get all books
 * BookStore/Books/:name  ---> GET operation to get a particular book by name
 * BookStore/Books  ---> POST operation to add book records
 * BookStore/Books/:name  --->PUT operation to update the record
 * BookeStore/Books/:name --->DELETE operation to delete a book from record
 */
// Note---->To keep things simple i have not use environment variables for securing passwords of database.
