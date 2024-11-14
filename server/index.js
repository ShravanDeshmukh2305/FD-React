const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bankRoutes = require("./routes/bankRoutes");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", bankRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));