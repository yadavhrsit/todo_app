const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth");
const cors = require('cors');
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
dotenv.config();
app.use("/auth", authRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((e) => {
    console.log("MongoDB Failed to connect", e);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
