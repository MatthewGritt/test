import {
  ChevronDownIcon,
  LightningBoltIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="text-[#bcdef5]">
      {/* top header */}
      {/* top header */}
      <div className="  px-3 bg-[#185886]  sm:bg-[#3672a9]">
        <div className="flex items-center justify-between w-full max-w-[74rem] mx-auto">
          <div className="flex items-center h-[49.5px]">
            <MenuIcon className="h-7 w-7 cursor-pointer mr-4 sm:hidden " />
            <img
              className="cursor-pointer"
              src="https://socialphobiaworld.com/styles/default/xenforo/spw-logo.png"
              alt=""
            />
          </div>
          <div className="flex items-center sm:hidden">
            <span className=" text-sm p-2 headerBtn">Log in</span>
            <span className="text-sm p-2 headerBtn">Register</span>
            <div className="headerBtn p-2">
              <LightningBoltIcon className="h-5 w-5" />
            </div>
            <div className="headerBtn p-2">
              <SearchIcon className="h-5 w-5  " />
            </div>
          </div>
        </div>
      </div>
      {/* bottom header */}
      {/* bottom header */}
      <div className="hidden sm:inline-flex h-9 w-full bg-[#185886] justify-between px-3">
        <div className="flex justify-between w-full max-w-[74rem] mx-auto">
          <div className="flex items-center">
            <ul className="flex items-center h-full">
              <li className="headerHov px-3">Home</li>
              <li className="headerHov px-3">Forums</li>

              <li className="flex items-center  ">
                <div className="headerHov pl-3 pr-1">What's new</div>

                <div className=" h-full py-[9px]  hover:bg-[#36739e] cursor-pointer ">
                  <ChevronDownIcon className="h-4 mx-1 flex mt-[2px]" />
                </div>
              </li>

              <li className="flex items-center  ">
                <div className="headerHov pl-3 pr-1">Members</div>

                <div className=" h-full py-[9px]  hover:bg-[#36739e] cursor-pointer ">
                  <ChevronDownIcon className="h-4 mx-1 flex mt-[2px]" />
                </div>
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="flex items-center">
            <span className=" bg-[#244a66] h-full flex items-center px-3 border-r-[0.5px] border-[#1d3a50] rounded-sm hover:bg-[#1a3142] cursor-pointer">
              Log in
            </span>
            <span className="bg-[#244a66] h-full flex items-center px-3 rounded-sm hover:bg-[#1a3142] cursor-pointer">
              Register
            </span>
            <div className="flex items-center h-full bg-[#244a66] ml-2 px-2 rounded-sm hover:bg-[#1a3142] cursor-pointer">
              <SearchIcon className="h-5" />
              <span className="hidden lg:inline-flex pl-1">Search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
