function nbYear(p0, percent, aug, p){
    let n = 0
    let percentInt = percent * .01
    while(p0 < p){
        let p00 = (p0+p0*percentInt+aug)
        p0 = p00
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