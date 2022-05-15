const express = require("express");
const app = express();
const morgan = require("morgan");

const router = require("./router");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(4242, console.log("server up"));

