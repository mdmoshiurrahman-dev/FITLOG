"use client";
import TodayPlanCart from "@/components/my-plan-display/TodayPlanCart";
import { DataContext } from "@/context/WorkoutDataProvider";
import { DataContextType } from "@/types/workoutDataType/workout";
import { useContext } from "react";

const MyPlanPage = () => {
  const { todayPlan, SetTodayPlan, saved, setSaved, button, setButton } =
    useContext(DataContext) as DataContextType;
  return <div className="flex flex-col gap-3 container mx-auto px-4">
    {
      button ? todayPlan.map(workout=> <TodayPlanCart key={workout.id} prop={workout}/>) : ''
    }
  </div>;
};

export default MyPlanPage;
