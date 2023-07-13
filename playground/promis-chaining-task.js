require('../src/db/mongooes')
const { count } = require('../src/models/tasks')
const Task= require('../src/models/tasks')


/*Task.findByIdAndUpdate('636a13615b4dfe6304e6ba1c',{description:'doing well'}).then((task)=>{
    console.log(task)

    return Task.countDocuments({completed:false})
}).then((result)=>{

   console.log(result)
}).catch((e)=>{
    console.log(e)
})*/


const deleteTaskAndCount = async (id) =>{

    const task = await Task.findByIdAndDelete(id)

    const count = await Task.countDocuments({completed:false})

    return count

}

deleteTaskAndCount('636a13615b4dfe6304e6ba1c').then((count)=>{

    console.log(count)
}).catch((e)=>{
    console.log(e)
})