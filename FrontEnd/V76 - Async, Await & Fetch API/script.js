/*

function getData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(5021);
        }, 3000);
    })
}

console.log("Loading Modules")
console.log("Load Data")

let data = getData()
console.log(data)

console.log("Process Data");
console.log("Processing Data...");
console.log("Processing Data...");

 - Here, all console runs regardless of whether function completed at line 12 or not! This is asynchronous nature of JS

*/

// To improve this we use async await to give delay until data loaded or function run completely!

async function getData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(5021);
        }, 3000);
    })
}


async function main(){

    console.log("Loading Modules")
    console.log("Load Data")

    let data = await getData()
    console.log(data)

    console.log("Process Data");
    console.log("Processing Data...");
    console.log("Processing Data...");
}

main();