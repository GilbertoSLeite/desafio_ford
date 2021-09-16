const getEstoques = require("../../../applications/businessRules/estoque/materialEstoque");

const Estoques = async (request, response) => {
  try {
    return getEstoques.GetEstoques(request, response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error: ", error);
    return error;
  }
};

module.exports = {
  Estoques,
};
