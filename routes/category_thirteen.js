var express = require("express");

var router = express.Router();

var Category_thirteen = require("../models/Category_thirteen");

router.post("/", (req, res) => {
  let body = req.body;
  let category_thirteen = new Category_thirteen();
  category_thirteen.name = body.name;
  category_thirteen.description = body.description;
  category_thirteen.form = body.form;
  category_thirteen.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_thirteen = new Category_thirteen();
  category_thirteen.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_thirteen = new Category_thirteen();
  category_thirteen.id = req.params.id;
  category_thirteen.getListbyid().then(
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
  let category_thirteen = new Category_thirteen();
  //   category_thirteen.id = body.id;
  category_thirteen.id = req.params.id;
  category_thirteen.name = body.name;
  category_thirteen.description = body.description;
  category_thirteen.form = body.form;
  category_thirteen.update().then(
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
  let category_thirteen = new Category_thirteen();
  category_thirteen.id = req.params.id;
  category_thirteen.delete().then(
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
