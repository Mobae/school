const trimObj = (obj) => {
  Object.keys(obj).map((k) => (obj[k] = obj[k].trim()));
  return obj;
};

const genRandPass = () => Math.random().toString(36).slice(-8);

module.exports = { trimObj, genRandPass };
