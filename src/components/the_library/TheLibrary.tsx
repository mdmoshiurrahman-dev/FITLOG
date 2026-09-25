import { IWorkout } from "@/types/workoutDataType/workout";
import WorkoutCart from "./workout-cart/WorkoutCart";
import { SiSupabase } from "react-icons/si";
import { Suspense } from "react";
import Skelton from "../suspance-screen/Skelton";

const workoutDataPromise = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  return response.json();
};

const TheLibrary = async () => {
  const workoutData: IWorkout[] = await workoutDataPromise();
  return (
    <section>
      <div>
        <div className="container mx-auto pl-4 md:pl-6">
          <h2 className="text-white font-teko text-3xl" id="library-section">
            THE LIBRARY
          </h2>
          <p className="text-gray-300 text-[14px]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <Suspense fallback = {<Skelton/>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4 sm:p-6 w-full max-w-7xl mx-auto">
            {workoutData.map((data) => (
              <WorkoutCart key={data.id} data={data} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default TheLibrary;
