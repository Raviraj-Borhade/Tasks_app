const mongoose = require('mongoose')
const validator =require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlparser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})

//imp:insted of have collection as users we have used 'User'bcuse mongooes automatically plural it

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
})

/*const ravi = new User({
    name:'Samarth',
    email:'ravi@gmail.com',
    password:'acsnnnnnnn'
})

ravi.save().then(()=>{
    console.log(ravi)
}).catch((error)=>{

    console.log(error)
})*/


/*const  Task = mongoose.model('Task',{            // mongoose model for task
 
    description:{
        type: String,
        required:true,
        trim:true,
    },

    completed:{
        type:Boolean,
        default:false
    }

})

/*const task = new Task({

    description:'do all the work',
    

})

task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log(error)
})*/