import express from "express";
import fileupload from "express-fileupload";
import postImage from "./routes/image.routes.js";
import { PORT } from "./config.js";

const app = express();

// Middleware
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

// Route
app.use(postImage);

app.listen(PORT, () => console.log(`server in port ${PORT}`));
