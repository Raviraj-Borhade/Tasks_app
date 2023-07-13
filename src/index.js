require("./db/mongooes");
//const User = require('./models/user')
//const Task = require('./models/tasks')
const userRouter = require("./router/userrout");
const taskRouter = require("./router/taskrout");
const express = require("express");
const app = express();
//for disable the request we want to
/*app.use((req,res,next)=>{
  if(req.method==='GET'){
    res.send('Get requesr are disabled') 

  }else{
    next()
  }
})*/

/*app.use((req,res,next)=>{
    if(req.method==='GET'||'POST'||'PATCH'||'DELETE'||''){
        res.status(400).send('site is under mainatainance')
    }else{
        next()
    }
})*/

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
//parse incoming json to an object

app.listen(3000, () => {
  console.log("server is up on port" + 3000);
});

/*const myFunction = async()=>{  demonstrate bcrpt hash method

    const password ='red12345!'
    const hashedPassword= await bcrypt.hash(password,8)  //8 means 8 round of hashing //always use 8 reccomanded value

  console.log(password)
  console.log(hashedPassword)

  const isMatch = await bcrypt.compare('red12345!',hashedPassword)

  console.log(isMatch)

}*/
/*const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
    expiresIn: "20 days",
  });
  console.log(token);

  const data = jwt.verify(token, "thisismynewcourse");
  console.log(data);
};

myFunction();*/

// const Task = require("./models/tasks");
// const User = require("./models/user");

// const main = async () => {
//   //   const task = await Task.findById("637330b5d3bf6419dca2f194");
//   //   await task.populate("owner").execPopulate();
//   //   console.log(task.owner);

//   const user = await User.findById("63732e0d95747f11341998e0");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
const multer = require("multer"); // multer is a middleware

const upload = multer({
  dest: "images",
  limits: {
    fileSize: 2000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.endsWith(".jpg")) {
      return cb(new Error("please upload jpg"));
    }
    cb(undefined, true);

    // cb(new Error("file must be the jpg"));// calling callbacks
    // cb(undefined, true);
  },
});

const errorMiddleware = (req, res, next) => {
  throw new Error("from my middleware");
};

app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
