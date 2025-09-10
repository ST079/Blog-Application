require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connection");
const indexRouter = require("./routes/indexRouter");
const errorMiddleware = require("./middlewares/error-middleware");


app.use(express.json());
const PORT = process.env.PORT || 5000;
connectDB();
app.use(process.env.VERSION,indexRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
