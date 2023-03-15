function nbYear(p0, percent, aug, p){
    let percentInt = percent * .01
    let n = 0
    while(p0 < p){
     p0 = p0+p0*percentInt+aug
       n++
    }
    return n
}

console.log(nbYear(1500, 5, 100, 5000))


function nbYear1(p0, percent, aug, p){
    var finalCatch = []
    var percent = percent / 100
    for(var p0; p0 < p; p0+=p0*percent+aug){
        currValue = p0 + p0 * percent + aug
        finalCatch.push(currValue)
    }
    return finalCatch.length
}

console.log(nbYear1(1500000, 2.5, 10000, 2000000))