const doWorkCallBack = (callback) => {
    setTimeout(() => {
        // callback('This is the error message', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000);
}

doWorkCallBack((error, result) => {
    if(error) {
        return console.log(error)
    }

    console.log(result)
})