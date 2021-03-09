module.exports = getAll = (req, res) => {
  try {
    res.send("Get All Users !!");
  } catch (error) {
    console.log(error);
  }
};
