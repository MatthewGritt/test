import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

function FeedMain() {
  const [message, setMessage] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "practice"), (snapshot) =>
        setMessage(snapshot.docs),
      ),
    [db],
  );

  return (
    <div className="max-w-[75rem] mx-auto mt-1 mb-5">
      <div className="flex">
        {/* LEFT PART */}
        <div className="  sm:mx-3 flex-1">
          <div className="pb-5">
            <div className="bg-[#edf6fd] text-[#3672a9] text-xl border-[#dfdfdf] border">
              <h2 className="py-[5px] px-3 hover:textHov">
                Social Anxiety Disorder Forums
              </h2>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div>
            <div className="bg-[#edf6fd] text-[#3672a9] text-xl border-[#dfdfdf] border">
              <h2 className="py-[5px] px-3 hover:textHov">
                Other related Disorders
              </h2>
            </div>
            {message.map((post) => (
              <Post message={post.data().message} />
            ))}
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
          </div>
        </div>
        {/* RIGHT PART */}

        <div className=" hidden lg:inline-block w-[260px]">
          {/* top */}
          <div className="border-[#cbcbcb] border h-fit rounded-md w-full">
            <div className="bg-[#fefefe] text-[#3672a9] rounded-t-md py-1 px-3 text-[17px]">
              <h2 className="text-[#47a7eb] pb-2 hover:textHov">
                Members online
              </h2>
              <p className="text-[13px] hover:textHov">Phoenixx</p>
            </div>
            <div className="bg-[#f5f5f5] rounded-b-md border-[#cbcbcb] border-t text-[13px]">
              <p className="text-[#505050] py-1 px-3">
                Total: 102 (members: 2, guests: 100)
              </p>
            </div>
          </div>
          {/* middle */}
          <div className="border-[#cbcbcb] border h-fit rounded-md w-full bg-[#fefefe] py-1 px-3 mt-5">
            <h2 className="text-[#47a7eb] text-[17px] pb-2 hover:textHov">
              Forum statistics
            </h2>
            <div className="flex items-center justify-between text-[15px]">
              <p className="text-[#8c8c8c]">Threads:</p>
              <p>47,589</p>
            </div>
            <div className="flex items-center justify-between text-[15px]">
              <p className="text-[#8c8c8c]">Messages:</p>
              <p>751,120</p>
            </div>
            <div className="flex items-center justify-between text-[15px]">
              <p className="text-[#8c8c8c]">Members:</p>
              <p>36,566</p>
            </div>
            <div className="flex items-center justify-between text-[15px]">
              <p className="text-[#8c8c8c]">Latest member:</p>
              <p className="text-[#3672a9] hover:textHov">The Tsar</p>
            </div>
          </div>
          <img
            className="rounded-md mt-12"
            src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FeedMain;
