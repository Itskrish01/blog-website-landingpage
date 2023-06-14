const JoinUsSection = () => {
  return (
    <div className="bg-[#e0ebfe] text-center max-w-7xl py-32 lg:py-20 rounded-lg mx-auto container">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-blue-600">JOIN OUR COMMUNITY</p>
        <h4 className="text-4xl w-full text-myblack md:w-1/2 robot-con-font font-bold">
          We are trusted by over 5000+ clients. Join them now and grow your
          business.
        </h4>
        <div>
          <button className="bg-myblack w-full mt-4 text-white text-lg font-bold py-4 px-4 hover:bg-blue-600 hover:scale-95 transition-all rounded">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
