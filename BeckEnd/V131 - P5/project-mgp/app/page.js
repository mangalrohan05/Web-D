import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-black h-[44vh] bg-red-50 gap-4">
        <div className="font-bold text-5xl">Work on it</div>

        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!
        </p>
        <br />
        <div>
          <button className="cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>


          <button className="cursor-pointer text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>

        </div>
      </div>

      <div className="bg-white opacity-50 h-1"></div>

    </>
  )
}
