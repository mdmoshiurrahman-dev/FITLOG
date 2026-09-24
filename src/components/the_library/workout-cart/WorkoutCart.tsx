import { IWorkout } from "@/types/workoutDataType/workout";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

export interface WorkoutCartProps {
  data: IWorkout;
}

const WorkoutCart = ({ data }: WorkoutCartProps) => {
  return (
    <section className="container mx-auto">
      <div className="border border-gray-500 grid grid-rows-2 rounded-xl">
        <div className="overflow-hidden relative">
          <Image
            className="object-cover rounded-t-xl"
            src={data.image}
            fill
            alt={data.name}
          />
        </div>
        <div className="p-4 bg-[#15171D] rounded-b-xl">
          <div className="flex gap-4">
            {data.muscleGroups.map((x, index) => (
              <p
                className="bg-[#C2F800] px-3 rounded-xl font-bold py-0.5 my-2 text-[12px]"
                key={index}
              >
                {x}
              </p>
            ))}
          </div>
          <div className="pb-4">
            <h3 className="text-white font-teko text-3xl">{data.name}</h3>
            <p className="text-gray-400 text-[14px]">{data.equipment}</p>
          </div>
          <div className="flex gap-4 text-gray-400 border-t pt-4 text-[14px]">
            <p>
              <IoMdTime className="inline" /> {data.duration}
            </p>
            <p>
              <FaFire className="inline" /> {data.caloriesBurned}
            </p>
            <p>
              <CiStar className="inline" /> {data.rating}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutCart;
