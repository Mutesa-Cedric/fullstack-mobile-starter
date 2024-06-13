require('dotenv').config();
import express = require("express");
import cors = require("cors");
import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import userRouter from "./modules/users/usersRouter";
import isAuthenticated from "./middlewares/auth";
import productsRouter from "./modules/products/productsRouter";

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(bodyParser.json())
app.use(cookieParser());

app.use((req, res, next) => {

    const origin = req.headers.origin || "*";
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Contxprol-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    next();
});


app.use((req, res, next) => {
    console.log(req.originalUrl, "\t", req.method, "\t", req.url);
    next();
});

app.use("/users", userRouter);
app.use("/products", isAuthenticated, productsRouter);
app.get("/", (req, res) => {
    res.send("Hello world");
});
