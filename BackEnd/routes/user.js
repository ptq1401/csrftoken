const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { check, body } = require("express-validator");

//---------------------------------------------
//--sign up--
const checkSignUpForm = [
  body("email", "Email cannot be empty.").notEmpty(),
  body("password", "Password cannot be empty.").notEmpty(),
  body("confirmPassword", "Confirm Password cannot be empty.").notEmpty(),
  check("email").isEmail().withMessage("Please enter a valid email."),
  check("password")
    .isLength({
      min: 8,
    })
    .withMessage("Password must at least 8 characters."),
];
router.post("/signup", checkSignUpForm, userController.postSignUp);

// //--login--
// const checkLoginForm = [
//   body("email", "Email cannot be empty.").notEmpty(),
//   body("password", "Password cannot be empty.").notEmpty(),
//   check("email").isEmail().withMessage("Please enter a valid email."),
// ];
// router.post("/login", checkLoginForm, userController.postLogin);

//---------------------------------------------
module.exports = router;
