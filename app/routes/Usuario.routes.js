const Usuarios = require("../models/Usuarios");

module.exports = app => {
    const tutorials = require("../controllers/main");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Usuarios.create);
  
    // Retrieve all Tutorials
    router.get("/", Usuarios.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", Usuarios.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Usuarios.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", Usuarios.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", Usuarios.delete);
  
    // Delete all Tutorials
    router.delete("/", Usuarios.deleteAll);
  
    app.use('/api/Usuarios', router);
  };