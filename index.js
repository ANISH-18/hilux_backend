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

app.use("/category_three", require("./routes/category_three"));

app.use("/category_four", require("./routes/category_four"));

app.use("/category_five", require("./routes/category_five"));

app.use("/category_six", require("./routes/category_six"));

app.use("/category_seven", require("./routes/category_seven"));

app.use("/category_eight", require("./routes/category_eight"));

app.use("/category_eleven", require("./routes/category_eleven"));

app.use("/category_twelve", require("./routes/category_twelve"));

app.use("/category_thirteen", require("./routes/category_thirteen"));

app.use("/category_fourteen", require("./routes/category_fourteen"));

app.use("/category_fifteen", require("./routes/category_fifteen"));

app.use("/category_sixteen", require("./routes/category_sixteen"));

app.use("/category_seventeen", require("./routes/category_seventeen"));

app.use("/category_eighteen", require("./routes/category_eighteen"));

app.use("/category_nineteen", require("./routes/category_nineteen"));

app.use("/category_twenty", require("./routes/category_twenty"));

app.listen(8081, () => {
  console.log("Server Running at http://localhost:8081");
});
