const StatesSection = () => {
  return (
    <div className="py-20 w-fit mx-auto space-y-10">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl text-white">
        Trusted by Millions, Built for You
      </h1>
      <div className="md:flex-row flex flex-col justify-center items-center text-white lg:gap-40 gap-10">
        <div className="flex flex-col justify-center items-center lg:items-start gap-y-4 ">
          <p>Total Downloads</p>
          <p className="text-6xl font-semibold">29.6M</p>
          <p>21% more than last month</p>
        </div>
        <div className="flex flex-col justify-center  items-center lg:items-start gap-y-4">
          <p>Total Reviews</p>
          <p className="text-6xl font-semibold">906K</p>
          <p>46% more than last month</p>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start gap-y-4">
          <p>Active Apps</p>
          <p className="text-6xl font-semibold">132+</p>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default StatesSection;
