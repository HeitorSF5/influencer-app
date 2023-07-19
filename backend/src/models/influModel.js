const connection = require('./connection');

const createInflu = async (influencer) => {
  const { name, handle, platform, category, subCount } = influencer;
  try {
    await connection.execute(
      'INSERT INTO Influencers (name, handle, platform, category, subCount) VALUES (?, ?, ?, ?, ?)',
      [name, handle, platform, category, +subCount]
    );
    return true;
  } catch(err) { return false };
};

const getAllInflu = async () => {
  try {
    const [influencers] = await connection.execute('SELECT * FROM Influencers');
    return influencers;
  } catch(err) { return false };
};

const updateInflu = async (influencer) => {
  const { id, name, handle, platform, category, subCount } = influencer;
  try {
    await connection.execute(
      'UPDATE Influencers SET name=?, handle=?, platform=?, category=?, subCount=? WHERE id=?',
      [name, handle, platform, category, subCount, +id]
    );
    return true;
  } catch(err) { return false };
};

const deleteInflu = async (id) => {
  try {
    const [query] = await connection.execute(
      'DELETE FROM Influencers WHERE id=?',
      [+id]
    );
    if (query.affectedRows > 0) return true;
    else return false;
  } catch(err) { return false };
};

// to do: Implement proper responses for non-error denied queries from the DB

module.exports = { createInflu, getAllInflu, updateInflu, deleteInflu };