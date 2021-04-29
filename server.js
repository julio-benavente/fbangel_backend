const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const referrals = require("./routes/api/referrals");
const candidates = require("./routes/api/candidates");
const incompleteCandidates = require("./routes/api/incompleteCandidates");

app.use("/api/referrals", referrals);
app.use("/api/candidates", candidates);
app.use("/api/incompleteCandidates", incompleteCandidates);

// Database connection
const db = process.env.ATLAS_MONGO_DB;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then((e) => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

// App connection
app.listen(port, () => {
  console.log("Server running... ");
});
