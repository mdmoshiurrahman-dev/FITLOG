"use client";
// import MyPlan from "@/components/my-plan/MyPlan";
import { DataContext } from "@/context/WorkoutDataProvider";
import { DataContextType } from "@/types/workoutDataType/workout";
import { useContext, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { todayPlan, SetTodayPlan, saved, setSaved, button, setButton } =
    useContext(DataContext) as DataContextType;
  const handelButton = (value: boolean) => {
    setButton(value);
  };

  const totalMinutesOfTodayPlan = todayPlan.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );
  const totalMinutesOfSaved = saved.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );
  const totalCaloriesOfTodayPlan = todayPlan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );
  const totalCaloriesOfSaved = saved.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );
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
          <div className="flex gap-2 items-center">
            <p className="text-[14px] text-gray-300">Sort By</p>
            <select
              name="cars"
              id="cars"
              className="bg-[#14171E] text-white text-[14px] outline-0 px-3 py-2 border border-gray-600 rounded-[10px]"
            >
              <option value="volvo">Duration</option>
              <option value="saab">Time</option>
              <option value="mercedes">Calorie</option>
              <option value="audi">Rating</option>
            </select>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
