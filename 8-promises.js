//Promise chaining

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
    })
}

add(1, 2).then((sum) => {
    console.log(sum)
    return add(sum, 6)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})
















// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([3, 6, 9])
//         reject('Things went wrong')
//     }, 2000);
// })

// doWorkPromise.then((result) => {
//     console.log('Success')
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

