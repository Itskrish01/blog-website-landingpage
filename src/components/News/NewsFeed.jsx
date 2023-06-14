import { LuArrowUpRight } from "react-icons/lu";
const NewsFeed = () => {
  return (
    <div>
      <div className="container max-w-7xl mx-auto px-4 sm:mt-16 mt-10  ">
        <div className="flex items-center justify-between px-2 sm:px-5">
          <div>
            <h2 className="robot-con-font font-bold text-3xl sm:text-5xl text-myblack">
              News feed
            </h2>
          </div>
          <div className="cabin-font sm:block hidden">
            <button className="bg-white text-myblack text-lg hover:bg-myblack hover:text-white font-bold py-4 px-4 border-[1px] border-myblack hover:scale-95 transition-all rounded">
              Browse News Feed
            </button>
          </div>
        </div>
        <div className="sm:mt-14 mt-6 mb-10 border-b-[1px] border-gray-200 pb-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-10">
            <div className="border-[1px] p-4 sm:p-6 group transition-all border-white hover:border-myblack duration-300 cursor-pointer rounded">
              <div className="overflow-hidden rounded">
                <img
                  src="https://uploads-ssl.webflow.com/6440a62ad0addedfa9c2db95/6440ddfc96d2a5af1c8121fc_Blog%2015-p-800.jpg"
                  alt="image"
                  className="rounded group-hover:scale-105 transition-all duration-200"
                />
              </div>
              <div className="flex gap-10 mt-6">
                <h3 className="robot-con-font text-2xl sm:text-2xl group-hover:text-blue-600 transition-all duration-300 font-semibold text-myblack">
                  Discover the Beauty of Pattaya: Your Guide to a Perfect
                  Getaway
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
                ultricies. Etiam quis diam nulla. Praesent interdum sollicitudin
                ipsum, quis ornare tellus condimentum id.
              </p>
            </div>
            <div className="border-[1px] p-4 sm:p-6 group transition-all border-white hover:border-myblack duration-300 cursor-pointer rounded">
              <div className="overflow-hidden rounded">
                <img
                  src="https://uploads-ssl.webflow.com/6440a62ad0addedfa9c2db95/6440dc68d53af68ca8a711eb_Blog%208-p-800.jpg"
                  alt="image"
                  className="rounded group-hover:scale-105 transition-all duration-200"
                />
              </div>
              <div className="flex gap-10 mt-6">
                <h3 className="robot-con-font text-2xl sm:text-2xl group-hover:text-blue-600 transition-all duration-300 font-semibold text-myblack">
                  Discover the Beauty of Pattaya: Your Guide to a Perfect
                  Getaway
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
                ultricies. Etiam quis diam nulla. Praesent interdum sollicitudin
                ipsum, quis ornare tellus condimentum id.
              </p>
            </div>
            <div className="cabin-font sm:hidden block w-full mt-5">
              <button className="bg-myblack w-full text-white text-lg font-bold py-4 px-4 hover:bg-blue-600 hover:scale-95 transition-all rounded">
                Browse News feed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
