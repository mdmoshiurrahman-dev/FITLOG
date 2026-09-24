import { IWorkout } from "@/types/workoutDataType/workout";
import WorkoutCart from "./workout-cart/WorkoutCart";

const workoutDataPromise = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });
  return response.json();
};

const TheLibrary = async () => {
  const workoutData: IWorkout[] = await workoutDataPromise();
  return (
    <section>
      <div>
        <h2>THE LIBRARY</h2>
        <p>Twelve lifts covering every major muscle group.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4 sm:p-6 w-full max-w-7xl mx-auto">
          {workoutData.map((data) => (
            <WorkoutCart key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheLibrary;

