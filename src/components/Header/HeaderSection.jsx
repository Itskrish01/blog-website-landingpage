const HeaderSection = () => {
  return (
    <div className="container bg-[#ebf2fd] sm:rounded-xl py-10 max-w-7xl mx-auto mt-20 px-4 sm:px-10">
      <div className="px-5 pb-10 sm:flex-row flex-col-reverse flex items-center gap-20">
        <div>
          <h1 className="robot-con-font font-bold text-5xl sm:text-6xl text-myblack">
            Crafting project specific solutions with expertise.
          </h1>
          <p className="sm:text-2xl text-lg text-mygray cabin-font mt-4">
            We are a company that focuses on establishing long-term
            relationships with customers.
          </p>
          <div className="flex gap-5 mt-8">
            <button className="bg-myblack text-white text-lg font-bold py-4 px-4 hover:bg-blue-600 hover:scale-95 transition-all rounded">
              Browse all
            </button>
          </div>
        </div>
        <div>
          <img src="/images/3d6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
