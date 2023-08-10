var express = require("express");

var router = express.Router();

var Category_sixteen = require("../models/Category_sixteen");

router.post("/", (req, res) => {
  let body = req.body;
  let category_sixteen = new Category_sixteen();
  category_sixteen.name = body.name;
  category_sixteen.description = body.description;
  category_sixteen.form = body.form;
  category_sixteen.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_sixteen = new Category_sixteen();
  category_sixteen.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_sixteen = new Category_sixteen();
  category_sixteen.id = req.params.id;
  category_sixteen.getListbyid().then(
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
  let category_sixteen = new Category_sixteen();
  //   category_sixteen.id = body.id;
  category_sixteen.id = req.params.id;
  category_sixteen.name = body.name;
  category_sixteen.description = body.description;
  category_sixteen.form = body.form;
  category_sixteen.update().then(
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
  let category_sixteen = new Category_sixteen();
  category_sixteen.id = req.params.id;
  category_sixteen.delete().then(
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
