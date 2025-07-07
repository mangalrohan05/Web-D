async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// let a = await sleep()
// let b = await sleep() 
// This gives error, that await used in async function!!

// SO we create a IIFE function that invokes immediately without calling remotely.
/*IIFE - Immediately Invoke Function Expression */

(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep() 
    console.log(b)

/*
    // let x, y = [1, 5] // Gives undefined: (2) [1, 5]
    // 0: 1
    // 1: 5
    // length: 2
*/


/*
    let [x, y] = [3, 6] // x =3, y = 6
*/


/*
    let [x, y] = [3, 5, 7] //x = 3, y = 5, nothing for 7
*/


/*
    let [x, y, z] = [2, 6] //x = 2, y = 6, z = undefined
*/


/*
    let [x, y, ...hj] = [1, 2, 3, 4, 5, 6, 7] //x = 1, y = 2, hj = {3, 4, 5, 6, 7}
*/

    console.log(x, y, hj)

})()