const valorBase = require("../../../data/baseValue");
const tamanhoPizza = require("../../../data/sizePizza");

const CalcPizza = (tipoPizza, tamanho) => {
  const value = valorBase[tipoPizza];
  const size = tamanhoPizza[tamanho];
};

module.exports = {
  CalcPizza,
};
