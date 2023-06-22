const MoodBento = () => {
  return (
    <div className="card bg-base-100 shadow-xl my-5 p-5 xl:m-10 xl:p-10">
      <div className="grid grid-cols-8 grid-rows-15 gap-4">
        <div className="col-span-6 row-span-3 bg-primary">1</div>
        <div className="col-span-2 row-span-3 col-start-7 bg-primary">2</div>
        <div className="col-span-6 row-span-7 row-start-4 bg-primary">3</div>
        <div className="col-span-2 row-span-3 col-start-7 row-start-4 bg-primary">
          4
        </div>
        <div className="col-span-2 row-span-7 col-start-7 row-start-7 bg-primary">
          5
        </div>
        <div className="col-span-3 row-span-3 row-start-11 bg-primary">6</div>
        <div className="col-span-3 row-span-3 col-start-4 row-start-11 bg-primary">
          7
        </div>
        <div className="col-span-4 row-start-14 bg-primary">9</div>
        <div className="col-span-4 col-start-5 row-start-14 bg-primary">10</div>
        <div className="col-span-4 row-start-15 bg-primary">11</div>
        <div className="col-span-4 col-start-5 row-start-15 bg-primary">12</div>
      </div>
    </div>
  );
};

export default MoodBento;
