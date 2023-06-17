const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3008;


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
