import Image from "next/image";

export default function Home() {
  return (
    <><div className="my-5 size-80 bg-red-500 relative">
      <Image className="mx-auto object-contain" fill={true} src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="Image" />
    </div>
      I am Home
    </>
  );
}
