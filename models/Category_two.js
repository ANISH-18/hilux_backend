var Database = require("./Database");

class Category_two {
  constructor() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.form = "";
    this.db = new Database();
    this.query = "";
  }

  save = () => {
    this.query = "INSERT INTO category_two(name, description, form)";
    this.query +=
      "VALUES('" +
      this.name +
      "', '" +
      this.description +
      "', '" +
      this.form +
      "')";
    return new Promise((resovle, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resovle(result);
        }
      });
    });
  };
}

module.exports = Category_two;
