const trimObj = (obj) => {
  Object.keys(obj).map((k) =>
    typeof k === String ? (obj[k] = obj[k].trim()) : obj[k]
  );
  return obj;
};

const genRandPass = () => Math.random().toString(36).slice(-8);

module.exports = { trimObj, genRandPass };
