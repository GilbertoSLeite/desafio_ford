const hoje = new Date();

const hojeDay = hoje.getDate();
const hojeHours = hoje.getHours();
const hojeMinute = hoje.getMinutes();
const hojeSecond = hoje.getSeconds();

const GenerateHashid = () =>
  hojeDay + "." + hojeHours + "." + hojeMinute + "." + hojeSecond;

module.exports = {
  GenerateHashid,
};
