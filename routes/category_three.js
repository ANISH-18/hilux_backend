var express = require("express");

var router = express.Router();

var Category_three = require("../models/Category_three");

router.post("/", (req, res) => {
  let body = req.body;
  let category_three = new Category_three();
  category_three.name = body.name;
  category_three.description = body.description;
  category_three.form = body.form;
  category_three.save().then(
    (result) => {
      res.end(JSON.stringify({ status: "Success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "Failed", data: err }));
    }
  );
  //   res.end("Post Called");
});

router.put("/:id", (req, res) => {
  let body = req.body;
  let category_three = new Category_three();
  category_three.id = req.params.id;
  category_three.name = body.name;
  category_three.description = body.description;
  category_three.form = body.form;
  category_three.update().then(
    (result) => {
      res.end(JSON.stringify({ status: "Success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "Failed", data: err }));
    }
  );

  //   res.end("Put Called");
});

router.get("/", (req, res) => {
  let category_three = new Category_three();
  category_three.getList().then(
    (result) => {
      res.end(JSON.stringify({ status: "Success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "Failed", data: err }));
    }
  );
  //   res.end("Get Called");
});

router.get("/:id", (req, res) => {
  let category_three = new Category_three();
  category_three.id = req.params.id;
  category_three.getListbyid().then(
    (result) => {
      res.end(JSON.stringify({ status: "Success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "Failed", data: err }));
    }
  );
  //   res.end("Get by ID Called");
});

router.delete("/:id", (req, res) => {
  let category_three = new Category_three();
  category_three.id = req.params.id;
  category_three.delete().then(
    (result) => {
      res.end(JSON.stringify({ status: "Success", data: result }));
    },
    (err) => {
      res.end(JSON.stringify({ status: "Failed", data: err }));
    }
  );
  //   res.end("Delete Called");
});

module.exports = router;
