require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const userRoute = require("./routes/UserRoute");
const categoryRoute = require("./routes/CategoryRoute");
const tagRoute = require("./routes/TagRoute");
const articleRoute = require("./routes/ArticleRoute");

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Running on port ${process.env.PORT}`);
        });
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log(error);
    });

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Online News");
});

app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/tags", tagRoute);
app.use("/api/articles", articleRoute);
