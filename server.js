// IMPORT NPM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

//CONNECT DATABASE

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolio-backend",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// DATA PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static("public"));

// ACCESS CONTROL ALLOW ORIGIN
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

// SESSION
app.use(
  session({
    secret: "trinh dep trai hahaha!",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60000 * 100 },
  })
);

// HEROKU SETUP
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// HTTP REQUEST
const projectsRoutes = require("./routes/projects.route");
const emailsRoutes = require("./routes/emails.route");
const categoriesRoutes = require("./routes/categories.route");
const usersRoutes = require("./routes/users.route");

app.use("/api/projects", projectsRoutes);
app.use("/api/emails", emailsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
