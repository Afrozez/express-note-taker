const express = require("express");
const routes = require("./routes")



const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);





app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});


