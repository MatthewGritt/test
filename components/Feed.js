import { ChevronRightIcon, LightningBoltIcon } from "@heroicons/react/outline";
import { useState } from "react";
import FeedHead from "./FeedHead";
import FeedMain from "./FeedMain";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function Feed() {
  const [text, setText] = useState("");

  const ButtonClick = (e) => {
    if (text) {
      addDoc(collection(db, "practice"), {
        message: text,
        name: "ben",
      });
      setText("");
    }
    db;
    e.preventDefault();
    console.log("fired");
  };

  console.log(text);
  return (
    <div className="bg-[#ececec] h-full overflow-hidden">
      <FeedHead />
      <div className="py-2 pl-2 max-w-[75rem] mx-auto">
        {/* firebase part */}
        <form>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />
          <button onClick={ButtonClick}>Send</button>
        </form>
        {/* firebase part */}
        <div className="flex items-center ml-1">
          <span className="text-[#3672a9] font-bold text-sm hover:underline cursor-pointer">
            Home{" "}
          </span>
          <ChevronRightIcon className="h-3 mt-[3px] pl-1" />
        </div>
        <div className="flex items-cente justify-between mt-1 mr-2 ">
          <h2 className=" text-2xl ml-1">SocialPhobiaWorld</h2>
          <div className="text-white bg-[#3672a9] flex items-center rounded-[5px] border px-1 py-[5px] cursor-pointer mr-1">
            <LightningBoltIcon className="h-5 " />
            <span className="px-2 text-sm">New posts</span>
          </div>
        </div>
      </div>

      <FeedMain />
    </div>
  );
}

export default Feed;
