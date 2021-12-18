function feedHead() {
  return (
    <div className="hidden sm:inline-flex items-center bg-[#f5f5f5]  w-full mt-0 border-b-[1px] border-[#cbcbcb] text-[#3672a9]">
      <div className="w-full max-w-[75rem] mx-auto text-xs py-2 px-3 ">
        <span className=" hover:underline cursor-pointer">New posts</span>
        <span className="ml-3 hover:underline cursor-pointer">
          Search forums
        </span>
      </div>
    </div>
  );
}

export default feedHead;
