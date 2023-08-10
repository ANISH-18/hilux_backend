var express = require("express");

var router = express.Router();

var Category_twenty = require("../models/Category_twenty");

router.post("/", (req, res) => {
  let body = req.body;
  let category_twenty = new Category_twenty();
  category_twenty.name = body.name;
  category_twenty.description = body.description;
  category_twenty.form = body.form;
  category_twenty.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_twenty = new Category_twenty();
  category_twenty.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_twenty = new Category_twenty();
  category_twenty.id = req.params.id;
  category_twenty.getListbyid().then(
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
  let category_twenty = new Category_twenty();
  //   category_twenty.id = body.id;
  category_twenty.id = req.params.id;
  category_twenty.name = body.name;
  category_twenty.description = body.description;
  category_twenty.form = body.form;
  category_twenty.update().then(
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
  let category_twenty = new Category_twenty();
  category_twenty.id = req.params.id;
  category_twenty.delete().then(
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
