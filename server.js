// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
var cors = require("cors"); // Access-Control-Allow-Origin

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

// Connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtr_backend", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Access-Control-Allow-Origin

// Step 3

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// HTTP request logger
const projectsRoutes = require("./routes/projects");
const emailsRoutes = require("./routes/emails");
const categoriesRoutes = require("./routes/categories");

app.use(morgan("tiny"));
app.use("/api/projects", projectsRoutes);
app.use("/api/emails", emailsRoutes);
app.use("/api/categories", categoriesRoutes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
