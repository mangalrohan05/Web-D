"use client"
import Image from "next/image";
export default function Home() {
  let data = {
    name: 'rohan',
    batch: 'IT',
  }
  const handleClick = async () => {
    try {

      let a = await fetch('/api/add', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      })  
      .then((res) => res.json())
      .then((data) => console.log(data))

      console.log(a)

    } catch(err){
      // alert(err)
      console.log(err)
    }

  }

  return (
    <div>
      <h1 className="text-xl font-bold">My Page Trial</h1>

      <button onClick={handleClick}>Click here</button>
    </div>
  );
}
