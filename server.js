// IMPORT NPM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors"); // Access-Control-Allow-Origin

const app = express();
const PORT = process.env.PORT || 8080;

// DATA PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

// app.use(
//   cors({
//     origin: ["http://localhost:2247", "https://mtr1990.github.io/portfolio"],
//     methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
//     credentials: true, //allow setting of cookies
//   })
// );
// app.options("*", cors());

app.use(morgan("tiny"));

app.use(
  session({
    secret: "trinh dep trai hahaha!",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60000 * 30 },
  })
);

app.use(express.static(__dirname + "/public"));

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
