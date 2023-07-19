const influService = require('../service/influService');

const createInflu = async (req, res) => {
  const influencer = req.body;
  const response = await influService.createInflu(influencer);
  if (response.error) return res.status(response.code).json({ message: response.error });
  res.status(201).json({ message: 'New influencer registered successfully.' });
};

const getAllInflu = async (_req, res) => {
  const response = await influService.getAllInflu();
  if ('error' in response) return res.status(response.code).json({message: response.error});
  res.status(200).json(response);
};

const updateInflu = async (req, res) => {
  const { id } = req.params;
  const { name, handle, platform, category, subCount } = req.body;
  const response = await influService.updateInflu({ id, name, handle, platform, category, subCount });
  if (response.error) return res.status(response.code).json({ message: response.error });
  return res.status(200).json({ message: 'Update successful'});
};

const deleteInflu = async (req, res) => {
  const { id } = req.params;
  const response = await influService.deleteInflu(id);
  if (response.error) return res.status(response.code).json({ message: response.error });
  return res.status(200).json({ message: 'Influencer deleted successfully'});
};

module.exports = { createInflu, getAllInflu, updateInflu, deleteInflu };