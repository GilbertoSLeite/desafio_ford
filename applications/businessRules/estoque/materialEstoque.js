const estoque = require("../../../data/dataEstoque.json");
const getToken = require("../../validationHash/validation");

let hashId;

const GetEstoques = async (request, response) => {
  try {
    hashId = await getToken(request.headers);
    if (hashId) {
      const estoqueGet = await estoque.findAll({
        order: [["ingrediente", "ASC"]],
      });
      response.status(200).send(
        JSON.stringify({
          fullData: estoqueGet,
          status: Boolean(true),
        })
      );
    } else {
      response.status(401).send(
        JSON.stringify({
          status: Boolean(false),
          messagem: "Você não é pizzaria do zé.",
        })
      );
    }
  } catch (error) {
    response.status(404).send(
      JSON.stringify({
        error: error,
      })
    );
  }
};

module.exports = {
  GetEstoques,
};
