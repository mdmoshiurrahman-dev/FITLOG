"use client";
import { DataContext } from "@/context/WorkoutDataProvider";
import { DataContextType } from "@/types/workoutDataType/workout";
import { useContext } from "react";

const MyPlanPage = () => {
  const { todayPlan, SetTodayPlan, saved, setSaved, button, setButton } =
    useContext(DataContext) as DataContextType;
  return <div>
    
  </div>;
};

export default MyPlanPage;
