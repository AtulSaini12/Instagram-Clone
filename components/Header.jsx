import Image from "next/image";

import { HomeIcon } from "@heroicons/react/solid";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer ">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400 " />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          <PaperAirplaneIcon className="navBtn" />
        </div>
      </div>
    </div>
  );
}

export default Header;
