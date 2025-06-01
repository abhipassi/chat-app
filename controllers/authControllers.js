const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userModel = require('../models/users')

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await userModel.findOne({ username });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({ username, email, password: hashedPassword });

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.loginUser = async (req,res)=> {
  // password compare 
  var {userName , password} = req.body
  console.log(req.body);
  
  
  try {
    let user = await userModel.findOne({username: userName})
    console.log(user);
    if(user){
      const isMatch =  bcrypt.compare(password,user.password)
      if(isMatch){

      let token = jwt.sign({username:userName },process.env.JWT_SECRET)
      res.cookie('token',token)
      //  return res.redirect('index.html')
      }
      else{
        if (!isMatch) return res.redirect('/login.html?msg=wrong_password');
      }
    }
    if(!user){  
    //  alert("user not found please signup first")
    //  res.redirect('signUp.html')
    return res.redirect('/signUp.html?msg=user_not_found');

    }
  } catch (error) {
    console.log(error);
  }
}


exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ msg: "No token, access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(403).json({ msg: "Invalid token" });
  }
};



exports.getUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
};



exports.logoutUser = async (req,res) => {
  res.clearCookie('token')  
  res.json({msg : "logged out"})
}