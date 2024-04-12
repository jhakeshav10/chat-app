import express from "express";
import dotenv from "dotenv";                                    // package
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";         // routes
import userRoutes from "./routes/user.routes.js";         

import connectToMongoDB from "./db/connectToMongoDB.js";        // db

import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



// app.get("/", (req, res) => {
//      root route http://localhost:5000/
//     res.send("Server is ready");
// });


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});