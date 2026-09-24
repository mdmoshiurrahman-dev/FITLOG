"use client";
import AddCart from "@/components/my-plan-display/AddCart";
import EmptyList from "@/components/my-plan-display/EmptyList";
import TodayPlanCart from "@/components/my-plan-display/TodayPlanCart";
import { DataContext } from "@/context/WorkoutDataProvider";
import { DataContextType } from "@/types/workoutDataType/workout";
import { useContext } from "react";

const MyPlanPage = () => {
  const { todayPlan, SetTodayPlan, saved, setSaved, button, setButton } =
    useContext(DataContext) as DataContextType;
  return (
    <div className="flex flex-col gap-3 container mx-auto px-4 my-4 md:my-6 lg:my-8">
      {button ? (
        todayPlan.length !== 0 ? (
          todayPlan.map((workout) => (
            <TodayPlanCart
              key={workout.id}
              todayPlan={todayPlan}
              SetTodayPlan={SetTodayPlan}
              prop={workout}
            />
          ))
        ) : (
          <EmptyList />
        )
      ) : saved.length !== 0 ? (
        saved.map((workout) => (
          <AddCart
            key={workout.id}
            prop={workout}
            saved={saved}
            setSaved={setSaved}
          />
        ))
      ) : (
        <EmptyList />
      )}
    </div>
  );
};
export default MyPlanPage;
