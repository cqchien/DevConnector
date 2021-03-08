const express = require("express");
const connectDB = require("./config/connect");

const app = express();
connectDB();
app.get("/", (req, res) => res.send("API sending"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
