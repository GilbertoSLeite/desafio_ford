const router = require("express").Router();

const EstoquesControllers = require("../controllers/estoque/estoqueControllers");

module.exports = (app) => {
  router.get("/:hashid", EstoquesControllers.Estoques);

  // Criando a rota
  app.use("/desafio_ford/estoque", router);
};
