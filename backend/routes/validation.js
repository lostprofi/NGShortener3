const express = require("express");
const router = express.Router();
const User = require("../dataBase/models");
const bcrypt = require("bcrypt");

router.post("/checkUserExist", async (req, res) => {
  const { email } = req.body;
  try {
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.json(true);
    }

    return res.json(false);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post("/checkEqPswrd", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({isUserExist: false});
      }
    const isEqlPwd = await bcrypt.compare(password, user.password);

    if (!isEqlPwd) {
      return res.json({isEqPswrd: false});
    }

    return res.json(true);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
