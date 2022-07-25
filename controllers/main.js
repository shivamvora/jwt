const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }
  console.log("username,password: ", username, password);
  res.send("fake login");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `hello shivam `,
    secret: `your lucky numbr is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
