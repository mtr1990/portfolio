// IMPORT NPM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors"); // Access-Control-Allow-Origin

const app = express();
const PORT = process.env.PORT || 8080;

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); // Access-Control-Allow-Origin
app.use(morgan("tiny"));

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
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolio-backend",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

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
