"use client";

import { IWorkout } from "@/types/workoutDataType/workout";
import { createContext, useState } from "react";

export const DataContext = createContext({});
export const WorkoutDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [todayPlan, SetTodayPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
   const [button, setButton] = useState<boolean>(true);
  return (
    <DataContext.Provider value={{ todayPlan, SetTodayPlan, saved, setSaved, button, setButton }}>
      {children}
    </DataContext.Provider>
  );
};

export default WorkoutDataProvider;
