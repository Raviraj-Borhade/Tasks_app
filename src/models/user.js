const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./tasks");

const userSchema = new mongoose.Schema(
  {
    // mongooes model for user

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("type valid email");
        }
      },
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("password doesnt meet the criteria");
        }
      },
    },

    age: {
      type: Number,
      trim: true,
      validate(value) {
        if (value < 0) {
          throw new Error("age must be positive");
        }
      },
    },

    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],

    avatar: {
      type: Buffer,
    },
  },

  {
    timestamps: true,
  }
);
//userSchema.methods= for methods on instance of user
//userSchema.statics= on the actual User model

userSchema.virtual("tasks", {
  //for giving virtual reference of users tasks and not stored in the database
  ref: "Task",
  localField: "_id",
  foreignField: "owner",
});

userSchema.methods.toJSON = function () {
  // for hiding data of users
  const user = this;

  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismynewcourse");
  user.tokens = user.tokens.concat({ token: token });
  await user.save();
  return token;
};

// middleware for log in user
userSchema.statics.findByCredencials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("unable to log in");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("unable to log in");
  }

  return user;
};

//Hash the plain password before saving...ie.used middleware here
userSchema.pre("save", async function (next) {
  /* we havent used arrow function here because we are going to use this binding
and arrow function do not support it*/
  const user = this; //for grabing content of the  user this is used

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8); // 8 for '8' no of hash round
  }

  next();
});

userSchema.pre("remove", async function (next) {
  const user = this;

  await Task.deleteMany({ owner: user._id });
  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;

/*const User = mongoose.model('User',{              // mongooes model for user 

    name:{
        type:String,
        required:true,
        trim:true

    },

   email: {
    type:String,
    required:true,
    trim:true,
    validate(value){
        if(!validator.isEmail(value)){

            throw new Error('type valid email')

        }
    }


    },

    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
             if(value.toLowerCase().includes('password')){
                throw new Error('password doesnt meet the criteria')
             }

        }


    },

    age: {
          type:Number,
          trim:true,
          validate(value) {
            if(value < 0){

                throw new Error('age must be positive')
            }
          }
    }
})*/
