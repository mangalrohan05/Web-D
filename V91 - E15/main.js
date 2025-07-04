/*
Write a node js program to clear clutter inside of a directory and organise the contents of that directory into different folders.
*/

import fs from "fs/promises"
import path from "path"
let files = "";
let ext = [];

const myPath = "D:\\Working\\V91 - E15\\FOLDER\\";

async function getExtension() {
    for (const file of files) {
        console.log(path.dirname(file))
        if (!ext.includes(path.extname(file))) {
            ext.push(path.extname(file));
        }
    }
}

async function createFolder() {
    for (let i = 0; i < ext.length; i++) {
        ext[i] = ext[i].split(".").slice(-1)[0];
    }
    console.log(ext)

    for (const fol of ext) {
        await fs.mkdir(path.join(myPath, fol), { recursive: true });
    }
}

async function pushItems() {
    for (const file of files) {
        if (file.includes(".") && !file.startsWith(".")) {
            const extension = path.extname(file).slice(1)
            const oldPath = path.join(myPath, file);
            const newPath = path.join(myPath, extension, file);

            await fs.rename(oldPath, newPath);
        }
    }
}

async function main(params) {
    files = await fs.readdir(myPath);

    await getExtension();
    await createFolder();
    await pushItems();
}

main();