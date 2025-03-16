const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

connectDB().then((db) => {
    app.get("/", (req, res) => {
        res.send("MongoDB Connection Successful!");
    });

    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
});
