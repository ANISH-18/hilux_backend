var express = require("express");

var router = express.Router();

var Category_four = require("../models/Category_four");

router.post("/", (req, res) => {
  let body = req.body;
  let category_four = new Category_four();
  category_four.name = body.name;
  category_four.description = body.description;
  category_four.form = body.form;
  category_four.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_four = new Category_four();
  category_four.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_four = new Category_four();
  category_four.id = req.params.id;
  category_four.getListbyid().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
  //   res.end("List id Called");
});

router.put("/:id", (req, res) => {
  let body = req.body;
  let category_four = new Category_four();
  //   category_four.id = body.id;
  category_four.id = req.params.id;
  category_four.name = body.name;
  category_four.description = body.description;
  category_four.form = body.form;
  category_four.update().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
  //   res.end("Update Called");
});

router.delete("/:id", (req, res) => {
  let category_four = new Category_four();
  category_four.id = req.params.id;
  category_four.delete().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
  //   res.end("delete Called");
});

module.exports = router;