const Stat = ({ data }) => {
  // console.log("userPromise", data);

  return (
    <div className="stats stats-vertical lg:stats-horizontal grid grid-cols-2 lg:grid-cols-4 justify-between gap-5 my-5 ">
      <div className="stat text-center bg-base-100 rounded-2xl">
        <h2 className="font-bold">{data.length}</h2>
        <p className="">Total Friend</p>
      </div>

      <div className="stat text-center bg-base-100 rounded-2xl">
        <h2 className="font-bold">3</h2>
        <p className="">On Track</p>
      </div>

      <div className="stat text-center bg-base-100 rounded-2xl">
        <h2 className="font-bold">6</h2>
        <p className="">Need Attention</p>
      </div>
      <div className="stat text-center bg-base-100 rounded-2xl">
        <h2 className="font-bold">12</h2>
        <p className="">Interaction This Month</p>
      </div>
    </div>
  );
};

export default Stat;
