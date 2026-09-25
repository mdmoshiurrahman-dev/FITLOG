"use client";
import AddCart from "@/components/my-plan-display/AddCart";
import EmptyList from "@/components/my-plan-display/EmptyList";
import TodayPlanCart from "@/components/my-plan-display/TodayPlanCart";
import { sortedDataContext } from "@/context/SortedWorkoutDataProvider";
import { DataContext } from "@/context/WorkoutDataProvider";
import {
  DataContextType,
  SortedDataContextType,
} from "@/types/workoutDataType/workout";
import { useContext } from "react";

const MyPlanPage = () => {
  const { todayPlan, SetTodayPlan, saved, setSaved, button, setButton } =
    useContext(DataContext) as DataContextType;
  const {
    sortedTodayPlan,
    // setSortedTodayPlan,
    sortedSavePlan,
    // setSortedSavePlan,
  } = useContext(sortedDataContext) as SortedDataContextType;

  const isSortedTodayPlanEmpty = sortedTodayPlan.length === 0;
  const isSortedSavePlanEmpty = sortedSavePlan.length === 0;
  const isTodayPlanEmpty = todayPlan.length === 0;
  const isSavedPlanEmpty = saved.length === 0;
  if (button) {
    if (isTodayPlanEmpty) {
      return (
        <div className="flex flex-col gap-3 container mx-auto px-4 my-4 md:my-6 lg:my-8">
          <EmptyList />
        </div>
      );
    } else {
      if (isSortedTodayPlanEmpty) {
        return (
          <div className="flex flex-col gap-3 container mx-auto px-4 my-4 md:my-6 lg:my-8">
            {todayPlan.map((workout) => (
              <TodayPlanCart
                key={workout.id}
                todayPlan={todayPlan}
                SetTodayPlan={SetTodayPlan}
                prop={workout}
              />
            ))}
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-3 container mx-auto px-4 my-4 md:my-6 lg:my-8">
            {sortedTodayPlan.map((workout) => (
              <TodayPlanCart
                key={workout.id}
                todayPlan={todayPlan}
                SetTodayPlan={SetTodayPlan}
                prop={workout}
              />
            ))}
          </div>
        );
      }
    }
  } else {
    if (isSavedPlanEmpty) {
      return (
        <div className="flex flex-col gap-3 container mx-auto px-4 my-4 md:my-6 lg:my-8">
          <EmptyList />
        </div>
      );
    } else {
      if (isSortedSavePlanEmpty) {
        return (
          <div className="flex flex-col gap-3 container mx-auto px-4 my-4 md:my-6 lg:my-8">
            {saved.map((workout) => (
              <AddCart
                key={workout.id}
                saved={saved}
                setSaved={setSaved}
                prop={workout}
              />
            ))}
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-3 container mx-auto px-4 my-4 md:my-6 lg:my-8">
            {sortedSavePlan.map((workout) => (
              <AddCart
                key={workout.id}
                saved={saved}
                setSaved={setSaved}
                prop={workout}
              />
            ))}
          </div>
        );
      }
    }
  }
};
export default MyPlanPage;
