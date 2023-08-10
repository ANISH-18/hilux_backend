var express = require("express");

var router = express.Router();

var Category_seven = require("../models/Category_seven");

router.post("/", (req, res) => {
  let body = req.body;
  let category_seven = new Category_seven();
  category_seven.name = body.name;
  category_seven.description = body.description;
  category_seven.form = body.form;
  category_seven.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_seven = new Category_seven();
  category_seven.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_seven = new Category_seven();
  category_seven.id = req.params.id;
  category_seven.getListbyid().then(
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
  let category_seven = new Category_seven();
  //   category_seven.id = body.id;
  category_seven.id = req.params.id;
  category_seven.name = body.name;
  category_seven.description = body.description;
  category_seven.form = body.form;
  category_seven.update().then(
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
  let category_seven = new Category_seven();
  category_seven.id = req.params.id;
  category_seven.delete().then(
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
