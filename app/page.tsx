import Image from "next/image";
import { MdHomeFilled, MdSearch, MdNotifications,MdBookmark } from "react-icons/md";
import { FaXTwitter,FaRegEnvelope, FaUser } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
// import {Inter} from "next/font/google"
import FeedCard from "@/components/FeedCard";

// const inter = Inter({ subsets: ["latin"]})

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode; //In ReactJS with TypeScript, ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean.
}

const sidebarMenuItem: TwitterSidebarButton[] = [
  { title: "Home", icon: <MdHomeFilled /> },
  {title: "Explore", icon: <MdSearch />},
  {title: "Notifications", icon: <MdNotifications/>},
  {title: "Messages", icon: <FaRegEnvelope/>},
  {title: "Bookmarks", icon: <MdBookmark/>},
  {title: "Profile", icon: <FaUser />},
  {title: "More", icon: <SlOptions />}
  
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-40">
        <div className="col-span-3  px-4 ml-20">
          <div className="text-3xl w-fit h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <FaXTwitter />
          </div>
          <div className="mt-2 text-xl pr-4">
            <ul>
              {sidebarMenuItem.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 w-fit cursor-pointer mt-2"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="text-xl font-semibold bg-[#1d9bf0] py-3  rounded-full w-full mt-5">
              Post
            </button>
          </div>
        </div>
        <div className="col-span-5 border-x-[1px] h-screen overflow-scroll no-scrollbar border-l-[1px] border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
