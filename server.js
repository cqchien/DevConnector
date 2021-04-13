const express = require("express");
const connectDB = require("./config/connect");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect database
connectDB();

// Middlewares
//TO DO: Convert req.body from json to object
app.use(express.json({ extended: false }));

// Routes
app.use("/api", require("./routes/index"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
