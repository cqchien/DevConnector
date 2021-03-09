const express = require("express");
const connectDB = require("./config/connect");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect database
connectDB();

// Routes
app.use("/api", require("./routes/index"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
