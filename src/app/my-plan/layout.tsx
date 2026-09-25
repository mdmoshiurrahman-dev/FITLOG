"use client";
import { sortedDataContext } from "@/context/SortedWorkoutDataProvider";
import { DataContext } from "@/context/WorkoutDataProvider";
import {
  DataContextType,
  IWorkout,
  SortedDataContextType,
} from "@/types/workoutDataType/workout";
import { useContext } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { todayPlan, SetTodayPlan, saved, setSaved, button, setButton } =
    useContext(DataContext) as DataContextType;
  const handelButton = (value: boolean) => {
    setButton(value);
  };

  const totalMinutesOfTodayPlan =
    todayPlan.length !== 0
      ? todayPlan.reduce((total, exercise) => total + exercise.duration, 0)
      : 0;
  const totalMinutesOfSaved =
    saved.length !== 0
      ? saved.reduce((total, exercise) => total + exercise.duration, 0)
      : 0;
  const totalCaloriesOfTodayPlan =
    todayPlan.length !== 0
      ? todayPlan.reduce(
          (total, exercise) => total + exercise.caloriesBurned,
          0,
        )
      : 0;
  const totalCaloriesOfSaved =
    saved.length !== 0
      ? saved.reduce((total, exercise) => total + exercise.caloriesBurned, 0)
      : 0;
  const sortedData = useContext(sortedDataContext);
  const {
    sortedTodayPlan,
    setSortedTodayPlan,
    sortedSavePlan,
    setSortedSavePlan,
  } = sortedData as SortedDataContextType;
  console.log(sortedTodayPlan);
  console.log(sortedSavePlan);
  const sortedTodayPlanFn = (
    workouts: IWorkout[],
    sort: "duration" | "calories" | "rating",
  ) => {
    if (sort === "duration") {
      if (button) {
        setSortedTodayPlan(
          [...workouts].sort((a, b) => a.duration - b.duration),
        );
      } else {
        setSortedSavePlan(
          [...workouts].sort((a, b) => a.duration - b.duration),
        );
      }
    } else if (sort === "calories") {
      if (button) {
        setSortedTodayPlan(
          [...workouts].sort((a, b) => a.caloriesBurned - b.caloriesBurned),
        );
      } else {
        setSortedSavePlan(
          [...workouts].sort((a, b) => a.caloriesBurned - b.caloriesBurned),
        );
      }
    } else {
      if (button) {
        setSortedTodayPlan([...workouts].sort((a, b) => a.rating - b.rating));
      } else {
        setSortedSavePlan([...workouts].sort((a, b) => a.rating - b.rating));
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div className="pl-2 mt-7">
        <h2 className="text-2xl text-white font-teko">MY PLAN</h2>
        <p className="text-gray-400 text-[14px]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="flex p-4 justify-between bg-[#13161D] mx-5 rounded-xl mt-5  border border-gray-700">
        <div>
          <p className="text-gray-400 text-[12px]">Exercises</p>
          <p className="text-[#C2F800] text-4xl">
            {button ? todayPlan.length : saved.length}
          </p>
        </div>
        <div className="border-l border-gray-600 pl-4">
          <p className="text-gray-400 text-[12px]">Minutes</p>
          <p className="text-white text-4xl">
            {button ? totalMinutesOfTodayPlan : totalMinutesOfSaved}
          </p>
        </div>
        <div className="border-l border-gray-600 pl-4">
          <p className="text-gray-400 text-[12px]">Calories</p>
          <p className="text-white text-4xl">
            {button ? totalCaloriesOfTodayPlan : totalCaloriesOfSaved}
          </p>
        </div>
      </div>

      <div>
        <div className="flex m-4 justify-between items-center">
          <div
            className={`rounded-xl border border-gray-800 p-1.25 bg-[#151921] flex flex-col md:inline-block`}
          >
            <button
              onClick={() => handelButton(true)}
              className={`bg-[#151921] cursor-pointer text-gray-300 px-3 py-1.25 rounded-l-xl text-[14px]  ${button ? "text-white font-bold bg-[#1F242D] border border-gray-600 rounded-xl" : ""}`}
            >
              Today’s Plan
            </button>
            <button
              onClick={() => handelButton(false)}
              className={`bg-[#151921] cursor-pointer text-white px-5 py-1.25  rounded-r-xl text-[14px]  ${!button ? "text-white font-bold bg-[#1F242D] border border-gray-600 rounded-xl" : ""}`}
            >
              Saved
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-30 flex justify-center items-center">
              <p className="text-gray-300 text-[14px]">Sort By</p>
            </div>
            <select
              onChange={(e) => {
                const newSort = e.target.value as
                  | "duration"
                  | "calories"
                  | "rating";
                if (button) {
                  sortedTodayPlanFn(todayPlan, newSort);
                } else {
                  sortedTodayPlanFn(saved, newSort);
                }
              }}
              defaultValue="Select any"
              className="select select-success bg-[#1F242D] text-white border-gray-600 outline-0 rounded-xl"
            >
              <option disabled={true} hidden={true}>
                Select any
              </option>
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
