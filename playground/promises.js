const doworkpromis = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{

    //resolve([1,2,3])
    reject('things went wrong')
    },2000)

})

doworkpromis.then((result)=>{

    console.log('success')
    console.log(result)

}).catch((error)=>{

    console.log('error',error)

})