import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./modules/routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Serve static files from the 'pics' directory
app.use("/pics", express.static("/home/fox/pics"));

// Email sending logic
app.post("/send-email", (req, res) => {});

// Use routes defined in routes.js
app.use("/", routes);

app.listen(port, () => {
  console.log(`Main app is running on port ${port}`);
});
