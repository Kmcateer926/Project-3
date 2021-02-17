const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

require("dotenv").config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === `production`) {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tutor-hub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

const ParentSignUpController = require("./controllers/parentController");
const SessionController = require("./controllers/sessionController");
const TutorController = require("./controllers/tutorController");
// const AuthController = require("./controllers/authController");
app.use(express.static("client/build"));

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// app.post("/api/login", (req, res) => {
//   res.json({
//     message: "Successfully signed in",
//     token: "banana"
//   })
// })

app.use("/api/parents", ParentSignUpController);
app.use("/api/sessions", SessionController);
app.use("/api/tutors", TutorController);
// app.use("/api/auth", AuthController);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
