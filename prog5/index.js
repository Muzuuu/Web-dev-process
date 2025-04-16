const express = require("express");
const conectdb = require('./db');
const userRoutes = require("./routes/users");

const app = express();
const port = 3000;

app.use(express.json());

conectdb();

app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send("Hi, I'm Muzammil");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
