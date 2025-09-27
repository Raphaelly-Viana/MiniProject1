const bakeryList = [];

const addBakery = (bakery) => {
  bakeryList.push(bakery);
};

const getAllBakeriesFromService = () => {
  return bakeryList;
};
const getBakeryById = (id) => {
  const bakery = bakeryList.find((bakery) => bakery.id == id);
  return bakery;
};

const deleteBakery = (id) => {
  const targetBakery = getBakeryById(id);
  const targetIndex = bakeryList.indexOf(targetBakery);
  bakeryList.splice(targetIndex, 1);
};

const updateBakery = (id, body) => {
  const targetBakery = getBakeryById(id);
  const targetIndex = bakeryList.indexOf(targetBakery);
  const updatedBakery = { ...targetBakery, ...body };
  bakeryList.splice(targetIndex, 1, updatedBakery);
  return updatedBakery;
};

module.exports = {
  addBakery,
  getAllBakeriesFromService,
  deleteBakery,
  updateBakery,
  getBakeryById,
};