var express = require("express");

var router = express.Router();

var Category_one = require("../models/Category_one");

router.post("/", (req, res) => {
  let body = req.body;
  let category_one = new Category_one();
  category_one.name = body.name;
  category_one.description = body.description;
  category_one.form = body.form;
  category_one.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_one = new Category_one();
  category_one.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_one = new Category_one();
  category_one.id = req.params.id;
  category_one.getListbyid().then(
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
  let category_one = new Category_one();
  //   category_one.id = body.id;
  category_one.id = req.params.id;
  category_one.name = body.name;
  category_one.description = body.description;
  category_one.form = body.form;
  category_one.update().then(
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
  let category_one = new Category_one();
  category_one.id = req.params.id;
  category_one.delete().then(
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
