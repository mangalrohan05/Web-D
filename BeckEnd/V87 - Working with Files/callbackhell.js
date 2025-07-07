const fs = require("fs");

fs.writeFile("test2.txt", "Staring a new journey", () => {
    console.log("Done!");
    fs.readFile("test2.txt", (err, data) => {
        // console.log(err, data);
        console.log(err, data.toString()); // Convert the buffer to a string and log it
        fs.writeFile("test2.txt", "Staring a new journey", () => {
            console.log("Done!");
            fs.readFile("test2.txt", (err, data) => {
                // console.log(err, data);
                console.log(err, data.toString()); // Convert the buffer to a string and log it
                fs.writeFile("test2.txt", "Staring a new journey", () => {
                    console.log("Done!");
                    fs.readFile("test2.txt", (err, data) => {
                        // console.log(err, data);
                        console.log(err, data.toString()); // Convert the buffer to a string and log it
                        fs.writeFile("test2.txt", "Staring a new journey", () => {
                            console.log("Done!");
                            fs.readFile("test2.txt", (err, data) => {
                                // console.log(err, data);
                                console.log(err, data.toString()); // Convert the buffer to a string and log it
                                fs.writeFile("test2.txt", "Staring a new journey", () => {
                                    console.log("Done!");
                                    fs.readFile("test2.txt", (err, data) => {
                                        // console.log(err, data);
                                        console.log(err, data.toString()); // Convert the buffer to a string and log it
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})