const influModel = require('../models/influModel');

const createInflu = async (influencer) => {

  // This is where data validation via Schemas would go

  const newInflu = await influModel.createInflu(influencer);
  if (!newInflu) return { code: 409, error: 'Influencer already exists!' }
  return newInflu; // Bool
};

const getAllInflu = async () => {

  // This is where data validation via Schemas would go

  const getAll = await influModel.getAllInflu();
  if (!getAll) return { code: 501, error: 'Something is wrong is with the Server!' }
  return getAll; // Array of influencers
}

const updateInflu = async (influencer) => {

  // This is where data validation via Schemas would go

  const updatedOne = await influModel.updateInflu(influencer);
  if (!updatedOne) return { code: 404, error: 'Influencer not found! Could not update.' }
  return updatedOne; // Bool
};

const deleteInflu = async (id) => {

  // This is where data validation via Schemas would go

  const deletion = await influModel.deleteInflu(id);
  if (!deletion) return { code: 404, error: 'Influencer not found! Could not delete.' }
  return deletion // Bool
}

module.exports = { createInflu, getAllInflu, updateInflu, deleteInflu }