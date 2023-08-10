var express = require("express");

var router = express.Router();

var Category_eighteen = require("../models/Category_eighteen");

router.post("/", (req, res) => {
  let body = req.body;
  let category_eighteen = new Category_eighteen();
  category_eighteen.name = body.name;
  category_eighteen.description = body.description;
  category_eighteen.form = body.form;
  category_eighteen.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_eighteen = new Category_eighteen();
  category_eighteen.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_eighteen = new Category_eighteen();
  category_eighteen.id = req.params.id;
  category_eighteen.getListbyid().then(
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
  let category_eighteen = new Category_eighteen();
  //   category_eighteen.id = body.id;
  category_eighteen.id = req.params.id;
  category_eighteen.name = body.name;
  category_eighteen.description = body.description;
  category_eighteen.form = body.form;
  category_eighteen.update().then(
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
  let category_eighteen = new Category_eighteen();
  category_eighteen.id = req.params.id;
  category_eighteen.delete().then(
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
