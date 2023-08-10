var express = require("express");

var router = express.Router();

var Category_six = require("../models/Category_six");

router.post("/", (req, res) => {
  let body = req.body;
  let category_six = new Category_six();
  category_six.name = body.name;
  category_six.description = body.description;
  category_six.form = body.form;
  category_six.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_six = new Category_six();
  category_six.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_six = new Category_six();
  category_six.id = req.params.id;
  category_six.getListbyid().then(
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
  let category_six = new Category_six();
  //   category_six.id = body.id;
  category_six.id = req.params.id;
  category_six.name = body.name;
  category_six.description = body.description;
  category_six.form = body.form;
  category_six.update().then(
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
  let category_six = new Category_six();
  category_six.id = req.params.id;
  category_six.delete().then(
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
