var express = require("express");

var router = express.Router();

var Category_fourteen = require("../models/Category_fourteen");

router.post("/", (req, res) => {
  let body = req.body;
  let category_fourteen = new Category_fourteen();
  category_fourteen.name = body.name;
  category_fourteen.description = body.description;
  category_fourteen.form = body.form;
  category_fourteen.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_fourteen = new Category_fourteen();
  category_fourteen.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_fourteen = new Category_fourteen();
  category_fourteen.id = req.params.id;
  category_fourteen.getListbyid().then(
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
  let category_fourteen = new Category_fourteen();
  //   category_fourteen.id = body.id;
  category_fourteen.id = req.params.id;
  category_fourteen.name = body.name;
  category_fourteen.description = body.description;
  category_fourteen.form = body.form;
  category_fourteen.update().then(
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
  let category_fourteen = new Category_fourteen();
  category_fourteen.id = req.params.id;
  category_fourteen.delete().then(
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
