var express = require("express");

var router = express.Router();

var Category_nineteen = require("../models/Category_nineteen");

router.post("/", (req, res) => {
  let body = req.body;
  let category_nineteen = new Category_nineteen();
  category_nineteen.name = body.name;
  category_nineteen.description = body.description;
  category_nineteen.form = body.form;
  category_nineteen.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_nineteen = new Category_nineteen();
  category_nineteen.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_nineteen = new Category_nineteen();
  category_nineteen.id = req.params.id;
  category_nineteen.getListbyid().then(
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
  let category_nineteen = new Category_nineteen();
  //   category_nineteen.id = body.id;
  category_nineteen.id = req.params.id;
  category_nineteen.name = body.name;
  category_nineteen.description = body.description;
  category_nineteen.form = body.form;
  category_nineteen.update().then(
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
  let category_nineteen = new Category_nineteen();
  category_nineteen.id = req.params.id;
  category_nineteen.delete().then(
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
