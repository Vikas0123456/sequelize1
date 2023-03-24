const db = require("./db.config");
const Customer = db.customers;


/////////////////////////////////////////////////
const createCustomer = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.age) {
    return res.status(400).send({
      message: "Bad Data",
    });
  }
  const customerObject = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };

  Customer.create(customerObject)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

//get all customers
const findAllCustomers = (req, res) => {
  Customer.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

//get customers by email
const findCustomerByEmail = (req, res) => {
  Customer.findByPk(req.params.email)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

//update customer
const updateCustomer = (req, res) => {
  const newData = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  Customer.update(newData, {
    where: {
      email: req.body.email,
    },
  })
    .then(() => {
      res.send("Updated data successfully for email: " + req.data.email);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

//delete customer by email
const deleteCustomer = (req, res) => {
  Customer.destroy({
    where: {
      email: req.params.email,
    },
  })
    .then(() => {
      res.send("Deleted data successfully for email: " + req.params.email);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = {
  createCustomer,
  findAllCustomers,
  findCustomerByEmail,
  updateCustomer,
  deleteCustomer,
};
