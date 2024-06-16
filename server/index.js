import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/posts.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  "mongodb+srv://raghav:raghav@mycluster.usgmsla.mongodb.net/";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`))
  )
  .catch((error) => console.log(error.message));
app.use("/posts", router);
// mongoose.set('useFindAndModify', false);
