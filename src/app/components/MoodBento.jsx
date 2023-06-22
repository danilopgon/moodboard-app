/* eslint-disable @next/next/no-img-element */
const MoodBento = ({ imgUrls }) => {
  if (!imgUrls?.length) {
    return (
      <div className="card my-5 bg-base-100 p-5 shadow-xl">
        <div className="grid min-h-screen grid-cols-2 grid-rows-3 gap-2 xl:grid-cols-4 xl:grid-rows-3 xl:gap-4">
          <div className="col-span-1  xl:col-span-2">
            <img
              alt="A cute cat"
              src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
              className="  h-full w-full object-cover "
            />
          </div>
          <div className="col-span-1 row-span-1  xl:col-span-2 xl:row-span-2">
            <img
              alt="A cute cat"
              src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
              className="  h-full w-full object-cover "
            />
          </div>
          <div className="col-span-1  xl:col-span-2">
            <img
              alt="A cute cat"
              src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
              className="  h-full w-full object-cover "
            />
          </div>
          <div className="">
            <img
              alt="A cute cat"
              src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
              className="  h-full w-full object-cover "
            />
          </div>
          <div className="">
            <img
              alt="A cute cat"
              src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
              className="  h-full w-full object-cover "
            />
          </div>
          <div className="col-span-1  xl:col-span-2">
            {" "}
            <img
              alt="A cute cat"
              src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
              className="  h-full w-full object-cover "
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card my-5 bg-base-100 p-5 shadow-xl">
      <div className="grid min-h-screen grid-cols-2 grid-rows-3 gap-2 xl:grid-cols-4 xl:grid-rows-3 xl:gap-4">
        {imgUrls.map((image, index) => (
          <div
            key={index}
            className={`col-span-1 bg-cover xl:col-span-2 ${
              index === 1 ? "xl:row-span-2" : ""
            }`}
          >
            <img
              alt="A cute cat"
              src={image}
              className="  h-full w-full object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodBento;
