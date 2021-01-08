const express = require('express');
const router = express.Router();
//import important things
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {clearRes} = require('../utils/auth');
const { veryToken, checkRole } = require("../utils/auth");


//POST Sign Up
router.post('/signup', (req, res, next) => {

	const {email, password, confirmPassword, name, last_name, phone, organization} = req.body;

	if (password !== confirmPassword) return res.status(403).json({msg: `Passwords don't match`});

	bcrypt.hash(password, 10).then((hashedPassword) => {

		const user = {email, password: hashedPassword, name, last_name, phone, organization};

		User.create(user).then(() => {
			res.status(200).json({msg: 'User created'});
		}).catch((error) => {
			//Get the specific error message
			//First, we turn the error object into an array and then we map the specific error message of each entry
			const validationError = Object.values(error.errors).map(type => type.properties.message);
			res.status(400).json({msg: 'An error occurred', error, validationError});
		});

	});

});

//POST Log In
router.post('/login', (req, res, next) => {

	const {email, password} = req.body;

	User.findOne({email})
		.then((user) => {

			if (user === null) return res.status(404).json({msg: `User doesn't exists`});

			bcrypt.compare(password, user.password).then((match) => {
				if (match) {
					//Delete password for the user
					//const withoutPass = user.toObject();
					//delete withoutPass.password;
					const newUser = clearRes(user.toObject());
					const token = jwt.sign({id: user._id}, process.env.SECRET, {
						expiresIn: '1d'
					});

					res.cookie('token', token, {
						expires: new Date(Date.now + 86400000),
						secure: false,
						httpOnly: true,
					}).json({user: newUser, code: 200});
				} else {
					return res.status(401).json({msg: `Wrong password`});
				}
			});

		}).catch((error) => {
			res.status(400).json({msg: 'An error occurred', error});
		});

});

//POST Log Out
router.post('/logout', (req, res) => {
	res.clearCookie('token').json({msg: 'Come back soon!'});
})

// Change Role
router.post("/:id", veryToken, checkRole(["ADMIN"]), (req,res, next)=>{
    const { id } = req.params; 
    User.findById(id)
        .then((user)=>{
			user.role="ADMIN";
            res.status(200).json({msg:"User now has the role Admin"})
        })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrong", error})
        })
}); 

// Delete an user
router.delete("/:id", veryToken, checkRole(["ADMIN"]), (req,res, next)=>{
    const { id } = req.params; 
    User.findByIdAndDelete(id)
        .then(()=>{
            res.status(200).json({msg:"User was deleted"})
        })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrong", error})
        })
}); 


module.exports = router;