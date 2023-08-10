var express = require("express");

var router = express.Router();

var Category_eight = require("../models/Category_eight");

router.post("/", (req, res) => {
  let body = req.body;
  let category_eight = new Category_eight();
  category_eight.name = body.name;
  category_eight.description = body.description;
  category_eight.form = body.form;
  category_eight.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_eight = new Category_eight();
  category_eight.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_eight = new Category_eight();
  category_eight.id = req.params.id;
  category_eight.getListbyid().then(
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
  let category_eight = new Category_eight();
  //   category_eight.id = body.id;
  category_eight.id = req.params.id;
  category_eight.name = body.name;
  category_eight.description = body.description;
  category_eight.form = body.form;
  category_eight.update().then(
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
  let category_eight = new Category_eight();
  category_eight.id = req.params.id;
  category_eight.delete().then(
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
