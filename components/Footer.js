import { WifiIcon } from "@heroicons/react/outline";

function Footer() {
  return (
    <div className="bg-[#0f3652] text-[#bcdef5] h-[70px] py-[6px] px-[14px]">
      <div className=" max-w-[75rem] mx-auto">
        <ul className="flex items-center text-[13px] sm:justify-end">
          <li className="pr-4 hover:textHov">Contact us</li>
          <li className="pr-4 hover:textHov">Terms and rules</li>
          <li className="pr-4 hover:textHov">Privacy policy</li>
          <li className="pr-4 hover:textHov">Help</li>
          <li className="pr-4 hover:textHov">Home</li>
          <li className="text-white cursor-pointer">
            <WifiIcon className=" h-[14px] bg-orange-400 rounded-sm" />
          </li>
        </ul>
      </div>
      <div className="mt-3 sm:text-center">
        <span className="text-white text-[11px] hover:textHov">
          Forum software by XenForo® © 2010-2020 XenForo Ltd.
        </span>
      </div>
    </div>
  );
}

export default Footer;
