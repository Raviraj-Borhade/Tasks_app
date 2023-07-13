const doworkcallback =(callback)=>{
    setTimeout(() => {
    
        //callback('this is my error',undefined)
           callback(undefined,[1,2,4])
    },2000)
    }
    
    doworkcallback((error,result)=>{
    
        if(error){
            return console.log(error)
        }
          console.log(result)
    })
