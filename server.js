// const express = require("express");
// const app = express();
// const path = require("path");
// const io = require("socket.io");
// const DB = require('mongoose')
// require('dotenv').config()
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const cookieParser = require('cookie-parser');

// app.use(cookieParser());


// // for data parsing coming from html form 
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // mongoDB connection\
// async function connectDB(){
//   try{  
//     await DB.connect(process.env.MONGO_URL)
//     console.log("Database Connected");
//   }
//   catch(err){
//     console.log("Database Connection err", err);
//   }
// }
// connectDB()


// // model configuration

// // let userModel = require('./models/users');
// // const { decode } = require("punycode");


// // app.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public', 'login.html'));
// // });

// // app.use(express.static(path.join(__dirname, 'public')))

// // app.get('/index.html', authenticationToken, (req,res)  =>{
// //   res.sendFile(path.join(__dirname, 'protected', 'index.html'))
// // })



// // creating a user in the DB using signup form signup.html 

// // app.post('/user_create', async (req, res)=>{
// //   var userName = req.body.userName
// //   let isUser =  await userModel.findOne({username: userName})
// //   if(isUser){
// //     // return res.send("username already exist")
// //     if (isUser) return res.redirect('/signUp.html?msg=already_exists')

// //   }

//   // password hashing using bcrypt
//   const hashedPassword = await bcrypt.hash(req.body.password , 10)
//   console.log(req.body);
//   let namebody = req.body.userName
//   let senitizeduserName = namebody.trim()

//   try {
//     await userModel.create({
//       username: senitizeduserName,
//       email: req.body.email,
//       password: hashedPassword
//     })
//     // setTimeout(()=>{
//       res.redirect('/login.html')
//     // },2000)
//     console.log("redirecting......");
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({message: failed})

//   }
// })

// // auth services

// async function authenticationToken(req,res,next){

//   const token = req.cookies.token
//   if(!token) return res.status(401).json({message:'Access Denied no token provided'})
//   try{
//    const decoded = jwt.verify(token,process.env.JWT_SECRET)
//    req.user = decoded
//    next()
//   }
//   catch(err){
//     res.status(403).json({  message:'invalid'})
//   }
// }

// // verifying the user 

// app.post('/user_login', async (req,res)=> {
//   // password compare 
//   var {userName , password} = req.body
//   console.log(req.body);
  
  
//   try {
//     let user = await userModel.findOne({username: userName})
//     console.log(user);
//     if(user){
//       const isMatch =  bcrypt.compare(password,user.password)
//       if(isMatch){

//       let token = jwt.sign({username:userName },process.env.JWT_SECRET)
//       res.cookie('token',token)
//       //  return res.redirect('index.html')
//       }
//       else{
//         if (!isMatch) return res.redirect('/login.html?msg=wrong_password');
//       }
//     }
//     if(!user){  
//     //  alert("user not found please signup first")
//     //  res.redirect('signUp.html')
//     return res.redirect('/signUp.html?msg=user_not_found');

//     }
//   } catch (error) {
//     console.log(error);
//   }
// })


// // getting back the data from db for fronted

// app.get('/data', authenticationToken, async (req,res) =>{
//   try {
//     const dbData = await userModel.find()
//     res.json(dbData)
//     console.log(dbData);
    
//   } catch (error) {
//     console.log(error);
//   }
// })

// // logout

// app.get('/logout', async (req,res) => {
//   res.clearCookie('token')
//   res.redirect('/login.html')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`server is running on port number ${process.env.PORT}`);
// });


const express = require("express");
const app = express();
const path = require("path");
const DB = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
var cors = require('cors')




app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// // mongoDB connection\
async function connectDB(){
  try{  
    await DB.connect(process.env.MONGO_URL)
    console.log("Database Connected");
  }
  catch(err){
    console.log("Database Connection err", err);
  }
}
connectDB()

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})