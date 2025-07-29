"use client"
import Image from "next/image";
import { submitAction } from "./actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="text-white bg-slate-800"/>
        </div>
        
        <div>
          <label htmlFor="name">Address</label>
          <input type="text" name="add" id="add" className="text-white bg-slate-800" />
        </div>

    <button className="border border-white cursor-pointer">Submit</button>
      </form>
    </div>
  );
}
