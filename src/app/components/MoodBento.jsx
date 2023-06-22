import Image from "next/image";

const MoodBento = () => {
  return (
    <div className="card bg-base-100 shadow-xl my-5 p-5">
      <div className="grid grid-cols-2 grid-rows-3 md:grid-rows-3 md:grid-cols-4 gap-2 md:gap-4 min-h-screen">
        <div className="bg-cover bg-[url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')] col-span-1 md:col-span-2"></div>
        <div className="bg-cover bg-[url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')] col-span-1 md:col-span-2 row-span-1 md:row-span-2"></div>
        <div className="bg-cover bg-[url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')] col-span-1 md:col-span-2"></div>
        <div className="bg-cover bg-[url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')]"></div>
        <div className="bg-cover bg-[url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')]"></div>
        <div className="bg-cover bg-[url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')] col-span-1 md:col-span-2"></div>
      </div>
    </div>
  );
};

export default MoodBento;
