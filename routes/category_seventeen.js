var express = require("express");

var router = express.Router();

var Category_seventeen = require("../models/Category_seventeen");

router.post("/", (req, res) => {
  let body = req.body;
  let category_seventeen = new Category_seventeen();
  category_seventeen.name = body.name;
  category_seventeen.description = body.description;
  category_seventeen.form = body.form;
  category_seventeen.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_seventeen = new Category_seventeen();
  category_seventeen.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_seventeen = new Category_seventeen();
  category_seventeen.id = req.params.id;
  category_seventeen.getListbyid().then(
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
  let category_seventeen = new Category_seventeen();
  //   category_seventeen.id = body.id;
  category_seventeen.id = req.params.id;
  category_seventeen.name = body.name;
  category_seventeen.description = body.description;
  category_seventeen.form = body.form;
  category_seventeen.update().then(
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
  let category_seventeen = new Category_seventeen();
  category_seventeen.id = req.params.id;
  category_seventeen.delete().then(
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
