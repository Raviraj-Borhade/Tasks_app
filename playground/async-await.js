
const add =(a,b)=>{
    return new Promise((ressolve,reject)=>{

    setTimeout(()=>{

        if(a<0||b<0){
            return reject('please enter positive values')
        }
        ressolve(a+b)

    },2000)
    })

}





const dowork=async ()=>{                 //async returns promis


       //throw new Error('something went wrong buddy') //throw error to reject promise
   const sum = await add(1,-99)
   const sum2 = await add(sum,1)
   const sum3= await add(sum2,-1)

   return sum3

}

dowork().then((result)=>{
    console.log('result',result)
}).catch((e)=>{
    console.log('error',e)
})
//*********************************************************************************************************************88 */

