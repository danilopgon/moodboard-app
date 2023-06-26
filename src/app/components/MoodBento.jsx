/* eslint-disable @next/next/no-img-element */
"use client";

const MoodBento = ({ imgUrls }) => {
  if (!imgUrls?.length) {
    return (
      <div className="my-5 bg-base-100 p-5 shadow-xl">
        <div className="grid min-h-screen grid-cols-2 grid-rows-3 gap-2 xl:grid-cols-4 xl:grid-rows-3 xl:gap-4">
          <div
            className="bg-cat-1  col-span-1 xl:col-span-2"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="bg-cat-2 col-span-1  row-span-1 xl:col-span-2 xl:row-span-2"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="bg-cat-3  col-span-1 xl:col-span-2"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="bg-cat-4"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="bg-cat-5"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="bg-cat-6  col-span-1 xl:col-span-2"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-5 bg-base-100 p-5 shadow-xl">
      <div className="grid min-h-screen grid-cols-2 grid-rows-3 gap-2 xl:grid-cols-4 xl:grid-rows-3 xl:gap-4">
        {imgUrls.map((image, index) => (
          <div
            key={index}
            className={`col-span-1 bg-cover
            ${index === 1 ? "xl:row-span-2" : ""}
            ${
              index === 0 || index === 1 || index === 2 || index === 5
                ? "xl:col-span-2"
                : ""
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MoodBento;
