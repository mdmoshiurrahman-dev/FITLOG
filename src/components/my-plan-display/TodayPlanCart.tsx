import { IWorkout } from "@/types/workoutDataType/workout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaCheck, FaFire } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

export interface TodayPlanCartProps {
  prop: IWorkout;
  todayPlan: IWorkout[];
  SetTodayPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

const TodayPlanCart = ({
  todayPlan,
  SetTodayPlan,
  prop,
}: TodayPlanCartProps) => {
  const handelRemoveButton = (data: IWorkout): void => {
    const remaining = todayPlan.filter((f) => f.id !== data.id);
    SetTodayPlan(remaining);
  };
  const [markButton, setMarkButton] = useState(true);
  const handelMarkButton = () => {
    setMarkButton(!markButton);
    if (markButton) {
      toast.success(`🎉 You've finished ${prop.name}!`, {
        className:"!bg-[#1F242D]  text-[14px] !text-[#E6E6E6] font-bold !border-2 !border-[#07BC0C]",
        closeButton: false,
      });
    }
  };
  return (
    <div
      className={`flex justify-between gap-3 md:gap-0 md:flex-row flex-col md:items-center bg-[#14171E] border rounded-xl transition-opacity duration-300 p-3 ${markButton ? "border-gray-700" : "border-green-600 opacity-70"}`}
    >
      <div className="flex gap-4">
        <div className="w-37.5 h-22.5 overflow-hidden flex justify-center items-center rounded-xl">
          <Image src={prop.image} width="150" height="90" alt={prop.name} />
        </div>
        <div>
          <h3 className="text-white font-teko text-[22px] font-bold">
            {prop.name}
          </h3>
          <p className="text-gray-400 text-[12px] font-semibold">
            {prop.equipment}
          </p>
          <div className="flex gap-1 text-[14px] text-gray-400 mt-3">
            <p>
              <IoMdTime className="inline text-[#C2F800]" /> {prop.duration} min
            </p>
            <p>
              <FaFire className="inline text-[#C2F800]" /> {prop.caloriesBurned}{" "}
              Kcal
            </p>
            <p>
              <CiStar className="inline text-[#C2F800]" /> {prop.rating}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <Link href={`/${prop.id}`}>
          <button className="px-4 py-1.5 rounded-2xl border border-gray-700 text-[12px] text-white cursor-pointer">
            View Details
          </button>
        </Link>
        <button
          onClick={handelMarkButton}
          className="bg-[#C2F800] px-4 py-1.5 rounded-2xl text-[12px] cursor-pointer"
        >
          <FaCheck className="inline" /> {markButton ? "Mark as Done" : "Done"}
        </button>
        <button
          onClick={() => {
            handelRemoveButton(prop);
            toast.error(`${prop.name} removed from Today's plan`, {
              className:
                "!bg-[#1F242D]  text-[14px] !text-[#E6E6E6] font-bold !border-2 !border-[#DC143C]",
              closeButton: false,
            });
          }}
          className="text-gray-300 py-1.5 px-2 cursor-pointer"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default TodayPlanCart;
