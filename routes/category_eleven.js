var express = require("express");

var router = express.Router();

var Category_eleven = require("../models/Category_eleven");

router.post("/", (req, res) => {
  let body = req.body;
  let category_eleven = new Category_eleven();
  category_eleven.name = body.name;
  category_eleven.description = body.description;
  category_eleven.form = body.form;
  category_eleven.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/", (req, res) => {
  let category_eleven = new Category_eleven();
  category_eleven.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    }
  );
});

router.get("/:id", (req, res) => {
  let category_eleven = new Category_eleven();
  category_eleven.id = req.params.id;
  category_eleven.getListbyid().then(
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
  let category_eleven = new Category_eleven();
  //   category_eleven.id = body.id;
  category_eleven.id = req.params.id;
  category_eleven.name = body.name;
  category_eleven.description = body.description;
  category_eleven.form = body.form;
  category_eleven.update().then(
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
  let category_eleven = new Category_eleven();
  category_eleven.id = req.params.id;
  category_eleven.delete().then(
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
