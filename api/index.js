const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose
    .connect(
        "mongodb+srv://mdsaif:saif@cluster0.jrx8jul.mongodb.net/",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    )
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

app.listen(port, () => {
    console.log("Server is running on port 8000");
})