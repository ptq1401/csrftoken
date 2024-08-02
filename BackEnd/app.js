const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");
require("dotenv").config();
const MDB_URL =
  "mongodb+srv://moonnie:wcoXk7d7NPXk5NVi@newword.fzoydpd.mongodb.net/project-learn-english?retryWrites=true&w=majority&appName=newword";

//----set options---
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
};

const store = new MongoDBStore({
  uri: MDB_URL,
  collection: "sessions",
});

var csrfProtection = csrf({ cookie: true });

//-----require router-------
const userRouter = require("./routes/user");

//-----server----------
const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(cookieParser());

//-----middleware---
app.use(csrfProtection);
app.use("/get-csurf", (req, res, next) => {
  console.log("connected");
  res.send({ csrfToken: req.csrfToken() });
  next();
});
app.use("/test", (req, res, next) => {
  console.log(req.body);
  res.send({ success: true });
  next();
});
//----router---
app.use(userRouter);

//-------------------------
mongoose
  .connect(MDB_URL)
  .then((result) => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });
