const express = require("express");
const app = express();
const userRouter = require("./src/routes/userRoutes");
const noteRouter = require("./src/routes/noteRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

app.use(express.json());

app.use(cors());

// app.use((req, res, next) => {
//   console.log("http method -" + req.method + ", URL -" + req.url);
//   next();
// });

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("Notes API for android ");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started on port no." + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
