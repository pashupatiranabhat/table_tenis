const { Admin } = require('../../config/models/Admin');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { validateLogin } = require('../../middleware/register/auth');
const { Op } = require("sequelize");
module.exports.Login = [validateLogin, async (req, res) => {
    var errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            var user = await Admin.findOne({
                where: {
                    [Op.and]: [
                        { username: req.body.username },
                        { password: req.body.password }
                  ]}
                });
                if (user) {
                var data = {
                    'id': user.id,
                    'username': user.username,
                }
                var token = await jwt.sign(data, "thisissecuritytoken", {
                    expiresIn: '365d'
                });
                data._token = token;
                return res.status(SUCCESS_REQUEST).json({ 'status': "success", message: 'Login Successfully', data: data });
            } else {
                return res.status(BAD_REQUEST).json({ 'status': "fail", message: 'Invalid mobile number/password.' });
            }
        } catch (e) {
            return res.status(BAD_REQUEST).json({ 'status': "fail", message: e.message });
        }

    } else {
        return res.status(BAD_REQUEST).json({ 'status': "fail", message: errors.array({ onlyFirstError: true })[0].msg });
    }
}];












