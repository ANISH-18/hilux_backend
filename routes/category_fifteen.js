var express = require("express");

var router = express.Router();

var Category_fifteen = require("../models/Category_fifteen");

router.post("/", (req, res) => {
  let body = req.body;
  let category_fifteen = new Category_fifteen();
  category_fifteen.name = body.name;
  category_fifteen.description = body.description;
  category_fifteen.form = body.form;
  category_fifteen.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_fifteen = new Category_fifteen();
  category_fifteen.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_fifteen = new Category_fifteen();
  category_fifteen.id = req.params.id;
  category_fifteen.getListbyid().then(
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
  let category_fifteen = new Category_fifteen();
  //   category_fifteen.id = body.id;
  category_fifteen.id = req.params.id;
  category_fifteen.name = body.name;
  category_fifteen.description = body.description;
  category_fifteen.form = body.form;
  category_fifteen.update().then(
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
  let category_fifteen = new Category_fifteen();
  category_fifteen.id = req.params.id;
  category_fifteen.delete().then(
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
