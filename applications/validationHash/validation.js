const idGenerated = require("../businessRules/uniqueZe/generateHashid");
const permanentData = "pizzariaZe";

const Validating = async (hashId) => {
  return hashId === permanentData + "." + idGenerated ? true : false;
};

module.exports = {
  Validating,
};
