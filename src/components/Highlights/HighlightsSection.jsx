import { LuArrowUpRight } from "react-icons/lu";

const HighlightsSection = () => {
  return (
    <div>
      <div className="container max-w-7xl mx-auto px-4 sm:mt-16 mt-10  ">
        <div className="flex items-center justify-between px-2 sm:px-5">
          <div>
            <h2 className="robot-con-font font-bold text-3xl sm:text-5xl text-myblack">
              Highlights
            </h2>
          </div>
          <div className="cabin-font sm:block hidden">
            <button className="bg-myblack text-white text-lg font-bold py-4 px-4 hover:bg-blue-600 hover:scale-95 transition-all rounded">
              Browse All Stories
            </button>
          </div>
        </div>
        <div className="sm:mt-14 mt-6 mb-10 border-b-[1px] border-gray-200 pb-6">
          <div className="md:flex gap-10 mb-10">
            <div className="md:flex-[0.6] md:pr-10 border-r-[1px] border-white md:border-gray-200">
              <div>
                <img
                  src="https://uploads-ssl.webflow.com/6440a62ad0addedfa9c2db95/6440db5cade4cf94440fe59d_Blog%204.jpg"
                  alt="image"
                  className="rounded"
                />
              </div>
              <div className="border-[1px] p-4 sm:p-6 group transition-all border-white hover:border-myblack duration-300 cursor-pointer mt-8 rounded">
                <div className="flex gap-10">
                  <h3 className="robot-con-font text-2xl sm:text-3xl group-hover:text-blue-600 transition-all duration-300 font-semibold text-myblack">
                    Spoil Yourself in Style: Bangkok&apos;s Most Luxurious
                    Hotels for an Unforgettable Stay
                  </h3>
                  <div className=" ">
                    <LuArrowUpRight
                      size={25}
                      className="group-hover:rotate-45 transition-all duration-300"
                    />
                  </div>
                </div>
                <p className="cabin-font text-sm text-mygray mt-4">
                  Nichanan Chaijaroen • April 20, 2023
                </p>
                <p className="sm:text-lg text-base cabin-font mt-4 text-mygray">
                  Proin nunc ipsum, venenatis vel massa a, ornare venenatis
                  sapien. Mauris sit amet rutrum sapien, sit amet blandit enim.
                  Cras eget metus sit amet quam tincidunt sollicitudin.
                </p>
              </div>
            </div>
            <div className="flex-[0.4] sm:mt-0 mt-10 lg:block">
              <div className="border-[1px] p-4 sm:p-6 group transition-all border-white hover:border-myblack duration-300 cursor-pointer rounded">
                <div className="flex gap-10">
                  <h3 className="robot-con-font text-2xl sm:text-3xl group-hover:text-blue-600 transition-all duration-300 font-semibold text-myblack">
                    Discover the Best of Bangkok&apos;s Street Food: Iconic
                    Dishes and Where to Find Them
                  </h3>
                  <div className=" ">
                    <LuArrowUpRight
                      size={25}
                      className="group-hover:rotate-45 transition-all duration-300"
                    />
                  </div>
                </div>
                <p className="cabin-font text-sm text-mygray mt-4">
                  Nichanan Chaijaroen • April 20, 2023
                </p>
                <p className="sm:text-lg  text-base cabin-font mt-4 text-mygray">
                  Pellentesque eu quam mauris. Aliquam eleifend tempus arcu non
                  ultricies. Etiam quis diam nulla. Praesent interdum
                  sollicitudin ipsum, quis ornare tellus condimentum id.
                </p>
              </div>
              <div className="border-[1px] p-4 sm:p-6 mt-8 group transition-all border-white hover:border-myblack duration-300 cursor-pointer rounded">
                <div className="flex gap-10">
                  <h3 className="robot-con-font text-2xl sm:text-3xl group-hover:text-blue-600 transition-all duration-300 font-semibold text-myblack">
                    Discover the Best of Bangkok&apos;s Street Food: Iconic
                    Dishes and Where to Find Them
                  </h3>
                  <div className=" ">
                    <LuArrowUpRight
                      size={25}
                      className="group-hover:rotate-45 transition-all duration-300"
                    />
                  </div>
                </div>
                <p className="cabin-font text-sm text-mygray mt-4">
                  Nichanan Chaijaroen • April 20, 2023
                </p>
                <p className="sm:text-lg  text-base cabin-font mt-4 text-mygray">
                  Pellentesque eu quam mauris. Aliquam eleifend tempus arcu non
                  ultricies. Etiam quis diam nulla. Praesent interdum
                  sollicitudin ipsum, quis ornare tellus condimentum id.
                </p>
              </div>
              <div className="cabin-font sm:hidden block w-full mt-5 ">
                <button className="bg-myblack w-full text-white text-lg font-bold py-4 px-4 hover:bg-blue-600 hover:scale-95 transition-all rounded">
                  Browse All Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;
