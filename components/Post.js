import { ChatIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Post() {
  return (
    <div className="flex justify-between bg-[#fefefe] text-[#3672a9] py-2 border-b border-[#cbcbcb] sm:border-l sm:border-r">
      {/* LEFT */}
      <div className="flex items-center ">
        <ChatIcon className="h10 w-10 text-orange-400 mx-2" />
        <div>
          <h3 className=" font-bold text-[17px] -mb-1 hover:textHov">
            Social Anxiety Forum
          </h3>
          <div className="text-gray-400 text-[13px] flex items-center">
            <p className=" lg:hidden ">
              Threads: <span className="text-black px-1">19.1k</span> Messages
              <span className="text-black px-1">237.3k</span>
            </p>
            {/* <span className="flex items-center">
              Sub-forums
              <ChevronDownIcon className="h-3 ml-[2px] mt-[2px]" />
            </span> */}
          </div>

          <p className="max-w-sm sm:hidden text-[13px] mt-[5px] truncate ">
            <span className="hover:textHov truncate">
              This is a post about stuff because you gotta love posts posts are
              great
            </span>

            <div className="text-gray-400 -mt-1">
              <span>wednesday at 12:41 PM</span>
              <span className="text-[#3672a9] pl-1 hover:textHov">
                SilentAndShy
              </span>
            </div>
          </p>
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden  sm:inline-flex items-center pr-2">
        <div className="hidden lg:inline-block text-[13px] text-gray-400 pr-5 text-center">
          <p>Threads</p>
          <span className="text-black text-sm">19.1k</span>
        </div>
        <div className="hidden lg:inline-block text-[13px] text-gray-400 pr-4 text-center">
          <p>Messages</p>
          <span className="text-black text-sm">237.3k</span>
        </div>
        <div className=" relative h-9 w-9 mr-2">
          <Image
            src="https://lh3.googleusercontent.com/ogw/ADea4I5AgEWro8j1XwVCM1ROvKLgurK26U_6vL9sYGbE=s32-c-mo"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <div className="text-[13px]">
          <p className="hover:textHov">This is a post about stuff...</p>
          <div className="text-gray-400 -mt-1">
            <span>wednesday at 12:41 PM</span>
            <span className="text-[#3672a9] pl-1 hover:textHov">
              SilentAndShy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
