// Import the express module
import express from "express";

// Create an instance of an Express application
const app = express();

// Enable static file serving
app.use(express.static("public"));

// allow the app to parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// create an array to store orders
const orders = [];

// Define the port number where our server will listen
const PORT = 3001;

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get("/", (req, res) => {
  // Send a response to the client
  res.sendFile("hello, world!");
});

app.get("/contact", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

app.get("/confirm", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.get("/admin", (req, res) => {
  res.send(orders);
});

app.post("/submit-order", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/admin.html`);
  console.log("Server is running at http://localhost:${PORT}");

  orderes.push(order);
  console.log(orders);
});

// Start the server and make it listen on the port
// specified above
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
