var express = require("express");
var bodyparser = require("body-parser");

var app = express();

app.use(express.json());
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: "true" }));

app.use(express.static("assets"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});

// app.get("/", (req, res) => {
//   res.end("Welcome to Hilux Backend");
// });

app.use("/category_one", require("./routes/category_one"));

app.use("/category_two", require("./routes/category_two"));

app.listen(8081, () => {
  console.log("Server Running at http://localhost:8081");
});
