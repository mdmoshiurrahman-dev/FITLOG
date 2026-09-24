import { IWorkout } from "@/types/workoutDataType/workout";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export interface TodayPlanCartProps {
  prop: IWorkout;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

const AddCart = ({ saved, setSaved, prop }: TodayPlanCartProps) => {
  const handelRemoveButton = (data: IWorkout): void => {
    const remaining = saved.filter((f) => f.id !== data.id);
    setSaved(remaining);
  };

  return (
    <div className="flex justify-between gap-3 md:gap-0 md:flex-row flex-col md:items-center bg-[#14171E] border border-gray-700 rounded-xl p-3">
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
          onClick={() => handelRemoveButton(prop)}
          className="text-gray-300 py-1.5 px-2 cursor-pointer"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default AddCart;
