// "use client"
// import { useEffect, useState } from "react";
import fs from 'fs/promises'
import Navbar from '@/components/Navbar';

export default function Home() {

  // const [count, setCount] = useState(0)
  console.log("Server or Client")

  let a = fs.readFile(".gitignore").then((e) => console.log(e.toString()))
  return (
    <>
    <Navbar/>
    This is body
      {/* <div>This is {count}</div> */}
    </>
  );
}
