// Import the express module
import express from "express";

// Create an instance of an Express application
const app = express();

// Enable static file serving
app.use(express.static("public"));

// allow the app to parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// create an array to store orders
const appointments = [];
const date = new Date();
// Define the port number where our server will listen
const PORT = 3005;

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get("/", (req, res) => {
  // Send a response to the client
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get("/confirmation", (req, res) => {
  res.send(appointments);
});

app.post("/submit-button", (req, res) => {
  const appointment = {
    fname: req.body.fname,
    lname: req.body.lname,
    scheduledDate: req.body.myDate,
    scheduledTime: req.body.myTime,
    timeSubmitted: date.toLocaleTimeString(),
  };
  console.log(appointment);
  appointments.push(appointment);
  res.json(appointments);
});

// Start the server and make it listen on the port
// specified above
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
