//for doing CRUD operations

/*const mongodb =require('mongodb')
const MongoClient =mongodb.MongoClient
const objectID =mongodb.objectID*/

const{MongoClient,ObjectID}= require('mongodb')

const connnectionURL ='mongodb://127.0.0.1:27017'
const databaseName='taskappManager'

const id =  new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)


MongoClient.connect(connnectionURL,{useNewUrlParser:true},(error,client)=>{

   if(error){
    return console.log('unable to connect')
     }

    const db= client.db(databaseName)

    /*db.collection('users').insertOne({
        _id:id,
        name:'Vikram',
        age:22
    },(error,result)=>{

        if(error){
            return console.log('unable to insert user')
        }

        console.log(result.ops)
    })*/

    /*db.collection('users').insertMany([

    {
        name:'kitto',
        age:3
    },
    {
        name:'samu',
        age:1
    }

    ],(error,result)=>{
          
        if(error){
            return console.log('unable to insert')
        }
        console.log(result.ops)
    })*/

    /*db.collection('tasks').insertMany([

        {
              description:'clean the house',
              completed:true
        },
        {

            description:'clean the garden',
            completed:false
        },
        {
            description:'plant tress',
            completed:false
        }
    ],(error,result)=>{

        if(error){
            return console.log('unable to insert')
        }

        console.log(result.ops)
    })*/

    /*db.collection('users').findOne({_id:new ObjectID("63649cd397d72c5874ec899e")},(error,user)=>{
        if(error){
            return console.log('unable to fetch data')

            
        }
        console.log(user)


    })*/

    /*db.collection('users').find({age:19}).toArray((error,users)=>{

        console.log(users)
    })

    db.collection('users').find({age:19}).count((error,count)=>{

        console.log(count)
    })*/

   /* db.collection('tasks').findOne({_id:new ObjectID("636368baeb8b5741285ba22a")},(error,task)=>{

    if(error){
        return console.log('unable to fetch the data')
    }

    console.log(task)
    })

    db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
        console.log(tasks)
    })*/

  /*const updatepromise =  db.collection('users').updateOne({
        _id:new ObjectID("636352300bb972e2a4d4afed")
    },{
        $inc:{

            age: 1
        }
    })

    updatepromise.then((result)=>{

        console.log(result)

    }).catch((error)=>{

        console.log(error)
    })*/


/*
    db.collection('tasks').updateMany({
        completed:false
    
    
    },{

        $set:{

            completed:true
        }
    }).then((result)=>{
        console.log(result.modifiedCount)

    }).catch((error)=>{

        console.log(error)
    })*/

   db.collection('tasks').deleteOne({description:'plant tress'}).then((result)=>{

    console.log(result)
   }).catch((error)=>{

    console.log(error)
   })


    /*db.collection('users').deleteMany({

        age:1
    }).then((result)=>{

        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })*/
})
