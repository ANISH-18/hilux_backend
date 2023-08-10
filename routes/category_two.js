var express = require("express");

var router = express.Router();

const Category_two = require("../models/Category_two");
const Category_one = require("../models/Category_one");

router.post("/", (req, res) => {
  let body = req.body;
  let category_two = new Category_two();
  category_two.name = body.name;
  category_two.description = body.description;
  category_two.form = body.form;
  category_two.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );

  //   res.end("post called");
});

router.get("/", (req, res) => {
  let category_two = new Category_two();
  category_two.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "Success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "Failed", data: err }));
    }
  );
  // res.end("get called");
});

router.get("/:id", (req, res) => {
  let category_two = new Category_two();
  category_two.id = req.params.id;
  category_two.getListbyid().then(
    (result) => {
      res.end(JSON.stringify({ status: "Success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "Failed", data: err }));
    }
  );

  // res.end("getByid called");
});

router.put("/:id", (req, res) => {
  let body = req.body;
  let category_two = new Category_two();
  category_two.id = req.params.id;
  category_two.name = body.name;
  category_two.description = body.description;
  category_two.form = body.form;
  category_two.update().then(
    (result) => {
      res.end(JSON.stringify({ status: "Success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "Failed", data: err }));
    }
  );

  // res.end("put called");
});

router.delete("/:id", (req, res) => {
  let category_two = new Category_two();
  let body = req.params.body;
  category_two.id = req.params.id;
  category_two.delete().then(
    (result) => {
      res.end(JSON.stringify({ status: "Success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "Failed", data: err }));
    }
  );
  // res.end("delete called");
});

module.exports = router;
