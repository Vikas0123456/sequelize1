const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 3100;

const db = require("./db.config");

//create table if not exist
db.sequelize.sync();

const controller = require("./customer.controller");

//create a new customer
app.post("/customers/new", (req, res) => {
  controller.createCustomer(req, res);
});

//find all customers
app.get("/customers", (req, res) => {
  controller.findAllCustomers(req, res);
});

//find all single customer by id
app.get("/customers/:email", (req, res) => {
  controller.findCustomerByEmail(req, res);
});

//update customer
app.put("/customers/update/:email", (req, res) => {
  controller.updateCustomer(req, res);
});

//delete a customer by email
app.delete("/customers/delete/:email", (req, res) => {
  controller.deleteCustomer(req, res);
});

app.listen(port, () => console.log(`server is running on ${port} port`));
