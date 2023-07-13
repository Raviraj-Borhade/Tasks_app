const add =(a,b)=>{
    return new Promise((ressolve,reject)=>{

    setTimeout(()=>{
        ressolve(a+b)

    },2000)
    })

}

/*add(5,2).then((sum)=>{

    console.log(sum)

    add(sum,8).then((sum2)=>{
        console.log(sum2)
    }).catch((e)=>{
        console.log(e)
    })

}).catch((e)=>{
console.log(e)
})*/

add(1,1).then((sum)=>{
    console.log(sum)

    return add(sum,5)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(e)
})