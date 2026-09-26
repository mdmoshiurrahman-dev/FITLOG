"use client";
import { DataContext } from "@/context/WorkoutDataProvider";
import { DataContextType } from "@/types/workoutDataType/workout";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
const NavBar = () => {
  const pathName = usePathname();
  const { todayPlan, saved, setButton } = useContext(
    DataContext,
  ) as DataContextType;
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${pathName === "/" ? "text-[#bcec1e] font-bold bg-[#1A2312] px-4 py-2 rounded-2xl" : "font-bold text-gray-300 px-4 py-2 rounded-2xl"}`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={`${pathName === "/my-plan" ? "text-[#bcec1e] font-bold bg-[#1A2312] px-4 py-2 rounded-2xl" : "font-bold text-gray-300 px-4 py-2 rounded-2xl"}`}
        >
          My Plan
        </Link>
      </li>
    </>
  );
  const linksDropdown = (
    <>
      <li>
        <Link
          href="/"
          className={`${pathName === "/" ? "text-[#c3ff00] font-bold bg-[#334127]" : "font-bold text-white"}`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={`${pathName === "/my-plan" ? "text-[#c3ff00] font-bold bg-[#334127]" : "font-bold text-white"}`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="border-b border-gray-500">
      <div className="navbar bg-[#0C0D10]  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="bg-[#83A807] btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-[#1F242D]"
            >
              {linksDropdown}
            </ul>
          </div>
          <Link href="/">
            <div className="flex gap-3 justify-center items-center">
              <Image
                src="/logo.png"
                height="75"
                width="75"
                alt="logo"
                className="h-10 w-10 ml-6 xl:ml-0"
              />
              <p className={`text-white font-bold font-teko text-2xl`}>
                FITLOG
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
        </div>
        <div className="navbar-end text-white gap-3">
          <Link href={"/my-plan"}>
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => setButton(true)}
            >
              <p className="text-gray-100">Plan</p>
              <p className="bg-[#C2F800] px-2 font-bold text-black rounded-full">
                {todayPlan.length}
              </p>
            </div>
          </Link>
          <Link href={"/my-plan"}>
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => setButton(false)}
            >
              <p className="text-gray-100">Saved</p>
              <p className="border border-gray-50 px-2 font-bold text-white rounded-full">
                {saved.length}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
