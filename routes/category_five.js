var express = require("express");

var router = express.Router();

var Category_five = require("../models/Category_five");

router.post("/", (req, res) => {
  let body = req.body;
  let category_five = new Category_five();
  category_five.name = body.name;
  category_five.description = body.description;
  category_five.form = body.form;
  category_five.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_five = new Category_five();
  category_five.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_five = new Category_five();
  category_five.id = req.params.id;
  category_five.getListbyid().then(
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
  let category_five = new Category_five();
  //   category_five.id = body.id;
  category_five.id = req.params.id;
  category_five.name = body.name;
  category_five.description = body.description;
  category_five.form = body.form;
  category_five.update().then(
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
  let category_five = new Category_five();
  category_five.id = req.params.id;
  category_five.delete().then(
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