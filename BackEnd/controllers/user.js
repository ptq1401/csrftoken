const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

//-------signup module--------
exports.postSignUp = (req, res, next) => {
  console.log(req.body);
};
// exports.postSignUp = (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const confirmPassword = req.body.confirmPassword;
//   const errors = validationResult(req);
//   //if error
//   if (!errors.isEmpty()) {
//     // console.log(errors.array());
//     return res.send({ error: true, message: errors.array()[0].msg });
//   }

//   User.findOne({ email: email })
//     .then((user) => {
//       if (!user) {
//         //if user does't exit
//         if (password === confirmPassword) {
//           bcrypt
//             .hash(password, 12)
//             .then((hashPass) => {
//               const user = new User({
//                 email: email,
//                 fullName: fullName,
//                 password: hashPass,
//                 role: "client",
//               });
//               user.save();
//               return res.send({ error: false, message: "" });
//             })
//             .catch((error) => {
//               console.log(error);
//               return res.send({ errorService: true });
//             });
//         } // password don't match
//         else return res.send({ error: true, message: "Password does't match" });
//       } //user exists
//       else return res.send({ error: true, message: "User already exists" });
//     })
//     .catch((error) => {
//       console.log(error);
//       return res.send({ errorService: true });
//     });
// };

//-------login module--------
// exports.postLogin = (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const errors = validationResult(req);
//   //if error
//   if (!errors.isEmpty()) {
//     // console.log(errors.array());
//     return res.send({ error: true, message: errors.array()[0].msg });
//   }

//   User.findOne({ email: email })
//     .then((user) => {
//       //user exist
//       if (user) {
//         bcrypt
//           .compare(password, user.password)
//           .then((doMatch) => {
//             if (doMatch) {
//               //----set cookie---
//               res.cookie("user_id", user._id);
//               res.cookie("login", true);
//               return res.send({
//                 error: false,
//                 user: { name: user.fullName },
//               });
//             } else return res.send({ error: true, message: "Password Error" });
//           })
//           .catch((error) => {
//             console.log(error);
//             return res.send({ errorService: true });
//           });
//       } else return res.send({ error: true, message: "User doesn't exist" });
//     })
//     .catch((error) => {
//       console.log(error);
//       return res.send({ errorService: true });
//     });
// };
//--get-start--
exports.getStart = (req, res, next) => {
  //-----middleware---
  console.log("connected");
};
