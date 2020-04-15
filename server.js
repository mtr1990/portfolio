// IMPORT NPM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const session = require("express-session");
const cors = require("cors"); // Access-Control-Allow-Origin

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors()); // Access-Control-Allow-Origin
app.use(morgan("tiny"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  session({
    secret: "supersecretstring12345!",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60000 * 30 },
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mtr_backend", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// HTTP REQUEST
const projectsRoutes = require("./routes/projects");
const emailsRoutes = require("./routes/emails");
const categoriesRoutes = require("./routes/categories");
const usersRoutes = require("./routes/users");

app.use("/api/projects", projectsRoutes);
app.use("/api/emails", emailsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
