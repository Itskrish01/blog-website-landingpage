import { LuSearch } from "react-icons/lu";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [Show, setShow] = useState(false);
  const [ShowSearch, setShowSearch] = useState(true);
  return (
    <>
      <nav className="fixed top-0 z-40 border-b-[1px] w-full text-myblack bg-white border-gray-200">
        <div className="max-w-7xl mx-auto container">
          <div className="flex px-4 cabin-font justify-between items-center py-5">
            <div onClick={() => setShow(true)} className="md:hidden block">
              <BiMenuAltLeft size={30} />
            </div>
            <div>
              <h5 className="font-bold text-2xl">Bloggy</h5>
            </div>
            <div className="md:block hidden">
              <ul className="flex gap-8 text-lg font-semibold">
                <li>Pages</li>
                <li>News Feeds</li>
                <li>Events</li>
                <li>Jobs</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <LuSearch size={25} onClick={() => setShowSearch(true)} />
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {Show && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween" }}
              onClick={() => setShow(false)}
              style={{ backdropFilter: "blur(2px)" }}
              className="bg-black md:hidden  flex opacity-30 fixed top-0 z-[99999] left-0 right-0 bottom-0 w-full"
            ></motion.div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "tween" }}
              className="min-h-screen md:hidden flex fixed top-0 z-[100000] left-0 flex-row bg-gray-100"
            >
              <div className="flex flex-col w-72 bg-white overflow-hidden">
                <div className="flex items-center justify-between px-6 h-20">
                  <a href={"/"}>
                    <h4 className="robot-con-font text-2xl font-bold">
                      Bloggy
                    </h4>
                  </a>
                  <RxCross2
                    size={20}
                    onClick={() => setShow(false)}
                    className=" cursor-pointer"
                  />
                </div>
                <ul className="flex flex-col py-6 px-5 list-none">
                  <li>
                    <a
                      href="/"
                      className="flex flex-row items-center h-12 text-gray-900 hover:text-gray-800"
                    >
                      <span className={` text-lg font-medium text-lightblack`}>
                        HOME
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-900 hover:text-gray-800"
                    >
                      <span className="text-lg font-medium text-lightblack">
                        TUTORIALS
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-900 hover:text-gray-800"
                    >
                      <span className="text-lg font-medium text-lightblack">
                        SHIRTS
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="flex flex-row items-center h-12 text-gray-900 hover:text-gray-800"
                    >
                      <span className={`  text-lg font-medium text-lightblack`}>
                        BLOG
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex flex-row items-center h-12 text-gray-900 hover:text-gray-800"
                    >
                      <span className={` text-lg font-medium text-lightblack`}>
                        Contact
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex flex-row items-center h-12 text-gray-900 hover:text-gray-800"
                    >
                      <span className={` text-lg font-medium text-lightblack`}>
                        About
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {ShowSearch && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95, backdropFilter: "blur(1100px)" }}
              exit={{ opacity: 0 }}
              className="bg-white/80 top-0 right-0 bottom-0 left-0 fixed z-[45] "
            ></motion.div>
            <RxCross2
              className="fixed z-[60] cursor-pointer text-black top-5 right-5"
              size={30}
              onClick={() => setShowSearch(false)}
            />
            <div className="fixed z-[50] top-0 w-full h-full flex items-center justify-center">
              <motion.input
                initial={{ rotate: 300, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 300, scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, type: "tween" }}
                type="text"
                placeholder="I am looking for..."
                className="max-w-3xl text-2xl mx-auto container bg-transparent border-b-[1px] border-mygray/40 py-5 px-6 placeholder:text-2xl placeholder:text-mygray focus:outline-none focus:border-myblack active:outline-none "
              />
              <div className="absolute sm:right-1/4 right-3 text-mygray">
                <LuSearch size={25} className="" />
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
