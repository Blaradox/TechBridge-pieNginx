const pies = ["tomatillo", "cherry"];

const readPies = () => {
  return pies;
};

const createPie = (flavor) => {
  pies.push(flavor);
};

const updatePie = (flavor, newFlavor) => {
  const oldPieIndex = pies.findIndex((pie) => pie == flavor);
  if (oldPieIndex === -1) {
    throw new Error("no such pie found");
  }
  pies.splice(oldPieIndex, 1, newFlavor);
};

const deletePie = (flavor) => {
  const eatenPieIndex = pies.findIndex((pie) => pie == flavor);
  if (eatenPieIndex === -1) {
    throw new Error("no such pie found");
  }
  pies.splice(eatenPieIndex, 1);
};

module.exports = {
  readPies,
  createPie,
  updatePie,
  deletePie,
};
