const express = require("express");


const connectDB = require("./config/DBconnect");

const app = express();




require("dotenv").config();

connectDB();
app.use(express.json());
app.use("/user", require("./Routes/user"));
app.use("/movie", require("./Routes/movie"));

app.use(express.static('client/build'));
app.get('*', (req, res) => res.sendFile(`${__dirname}/client/build/index.html`));



app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log("server is runnnig");
});
