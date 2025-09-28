const {
  addBakery,
  getAllBakeriesFromService,
  deleteBakery,
  updateBakery,
  getBakeryById,
} = require("../Services/bakeryService");

const createBakery = (bakery) => {
  const bakeryList = getAllBakeriesFromService();
  currentMaxId =
    bakeryList.length > 0 ? Math.max(...bakeryList.map((bakery) => bakery.id)) : 0;
  nextId = currentMaxId + 1;
  const newBakery = { ...bakery, id: nextId };
  addBakery(newBakery);
  return newBakery;
};

const getBakeries = () => {
  return getAllBakeriesFromService();
};

const removeBakeries = (id) => {
  const targetBakery = getBakeryById(id);
  if (targetBakery) {
    deleteBakery(id);
    return true;
  } else {
    return false;
  }
};

const updateBakeryAction = (id, body) => {
  const targetBakery = getBakeryById(id);
  if (targetBakery) {
    const updatedBakery = updateBakery(id, body);
    return updatedBakery;
  } else {
    return undefined;
  }
};

module.exports = {
  createBakery,
  getBakeries,
  removeBakeries,
  updateBakeryAction,
};