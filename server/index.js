const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend files from the client folder
app.use(express.static(path.join(__dirname, "../client")));

// API routes
const chatRoutes = require('./routes/chat');
app.use('/api/chat', chatRoutes);

// Fallback route to serve index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
