const Banner = () => {
  return (
    <div className="p-6">
      <div
        className="hero min-h-screen rounded-3xl"
        style={{
          backgroundImage: "url('/banner.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-white text-center">
          <div className="max-w-3xl">
            <h1 className="mb-10 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-10">
              The best place for becomming a professional chef. You will be
              guide by the top professional chefs and will be provided all the
              neccessary equipments to become cooking master. Do you want to
              uplift your skills on the cooking field? You are at the right
              place.
            </p>
            <div className="flex flex-col lg:flex-row lg:justify-center gap-8">
              <button className="btn bg-green-400 border-none hover:bg-green-600 text-lg px-8  rounded-3xl">Get Started</button>
              <button className="btn bg-inherit hover:bg-slate-500 text-xl text-white rounded-3xl px-8">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
