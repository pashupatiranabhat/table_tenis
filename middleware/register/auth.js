const {body}=require('express-validator');
const {Admin}=require('../../config/models/Admin');


module.exports.validateLogin=[
    body('username').isLength({min: 1}).trim().withMessage("Username  is required"),
    body('password').isLength({min: 1}).trim().withMessage("The password is required")
];


