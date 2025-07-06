function element(){

    
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
}

// for elements
element()



//for objects
function objects(){
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let {a, b} = obj
    console.log(a, b)
}

objects()