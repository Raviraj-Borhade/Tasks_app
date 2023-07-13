require('../src/db/mongooes')
const User = require('../src/models/user')

/*User.findByIdAndUpdate('636a129ba1f7096774fc29b1',{age:55}).then((user)=>{

    console.log(user)
    return User.countDocuments({age:55})

}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})*/


const updateAgeAndCount = async(id,age)=>{

    const user = await User.findByIdAndUpdate(id,{age:age})

    const count =await User.countDocuments({age:age})


    return count



}

updateAgeAndCount('636a129ba1f7096774fc29b1',70).then((count)=>{

    console.log(count)

}).catch((e)=>{
   console.log(e)
})