"use client";

import { IWorkout } from "@/types/workoutDataType/workout";
import { createContext, useState } from "react";

export const sortedDataContext = createContext({});

export const SortedWorkoutDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sortedTodayPlan, setSortedTodayPlan] = useState<IWorkout[]>([]);
  const [sortedSavePlan, setSortedSavePlan] = useState<IWorkout[]>([]);
  return (
    <sortedDataContext.Provider
      value={{
        sortedTodayPlan,
        setSortedTodayPlan,
        sortedSavePlan,
        setSortedSavePlan,
      }}
    >
      {children}
    </sortedDataContext.Provider>
  );
};

export default SortedWorkoutDataProvider;
