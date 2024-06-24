import React from "react"
import Image from "next/image"

import { FaRegHeart, FaRepeat} from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { LuUpload } from "react-icons/lu";


const FeedCard: React.FC = () =>{
    return (
      <div className="border border-gray-600 border-x-0 border-t-0 p-5 hover:bg-slate-900 transition-all cursor-pointer">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-1">
            <Image
              src={
                "https://scontent.cdninstagram.com/v/t51.2885-19/350230750_611751814258810_7506629121171921790_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=is-eyWFgRA4Q7kNvgEl-jse&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYB2vhcZI6rfgdEtjILLIpl_qc-8-keY3XAl1gGDsLF9VA&oe=6657F79E&_nc_sid=10d13b"
              }
              alt="img"
              width={50}
              height={50}
              className=" rounded-full"
            />
          </div>
          <div className="col-span-11">
            <h5>Lipu Swain</h5>
            <p>
              Is it just me or everyone else? Do you feel the code quality
              decrease as the project size increase?
            </p>
            <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
              <div>
                <FiMessageCircle />
              </div>
              <div>
                <FaRepeat />
              </div>
              <div>
                <FaRegHeart />
              </div>
              <div>
                <LuUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FeedCard;