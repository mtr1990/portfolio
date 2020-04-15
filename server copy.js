// IMPORT NPM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// DATA PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ACCESS-CONTROL-ALLOW-ORIGIN
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

// app.use(morgan("tiny"));

app.use(
  session({
    secret: "trinh dep trai hahaha!",
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
