/*

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    return 402
}

async function main(){
    console.log("Loading Modules")

    let data = await getData()
    console.log(data)

    console.log("Process data");

}

main()
*/

// Example POST method implementation:

async function postData(url = "", data = {}){
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, etc
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JS objects
}

postData("https://example.com/answer", {answer:42}).then((data) =>{
    console.log(data); // JSON data parsed by 'data.json' call
}).catch((e) =>{
    console.log(e)
});