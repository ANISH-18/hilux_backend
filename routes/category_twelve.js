var express = require("express");

var router = express.Router();

var Category_twelve = require("../models/Category_twelve");

router.post("/", (req, res) => {
  let body = req.body;
  let category_twelve = new Category_twelve();
  category_twelve.name = body.name;
  category_twelve.description = body.description;
  category_twelve.form = body.form;
  category_twelve.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_twelve = new Category_twelve();
  category_twelve.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_twelve = new Category_twelve();
  category_twelve.id = req.params.id;
  category_twelve.getListbyid().then(
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
  let category_twelve = new Category_twelve();
  //   category_twelve.id = body.id;
  category_twelve.id = req.params.id;
  category_twelve.name = body.name;
  category_twelve.description = body.description;
  category_twelve.form = body.form;
  category_twelve.update().then(
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
  let category_twelve = new Category_twelve();
  category_twelve.id = req.params.id;
  category_twelve.delete().then(
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
