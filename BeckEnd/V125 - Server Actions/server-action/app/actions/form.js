"use server"

import fs from 'fs/promises'

export const submitAction = async (e) => {
    "use server"

    console.log(e.get("name"), e.get("add"))

    await fs.writeFile("rohan.txt", `Name: ${e.get("name")}, Address: ${e.get("add")}`)
}