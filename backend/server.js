import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";



const app = express();
dotenv.config();
app.use(express.json());//to parse the incoming requests with JSON payloads(from req.)

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  // root route http://localhost:5001/
  res.send("Hello World!");
});

// Corrected route declaration
app.use("/api/auth", authRoutes);

app.listen(PORT, () =>{
  connectToMongoDB();


console.log(`Server is running on port ${PORT}`)
});