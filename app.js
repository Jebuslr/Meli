const express = require("express");
const path = require("path")
const app = express();

const port = process.env.PORT || 3000;

const publicPath = path.resolve('./public');
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/login.html"));
});

app.get("/registro", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/registro.html"));
});


app.listen(port, () => {
    console.log(`online en ${port}`);
});