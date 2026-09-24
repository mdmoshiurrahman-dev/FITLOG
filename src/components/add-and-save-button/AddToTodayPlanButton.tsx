"use client";
import { MdDateRange } from "react-icons/md";
import { AddButtonProps } from "./add-to-save-button";
import { DataContext } from "@/context/WorkoutDataProvider";
import { DataContextType, IWorkout } from "@/types/workoutDataType/workout";
import { useContext, useState } from "react";

const AddToTodayPlanButton = ({ data }: AddButtonProps) => {
  const { todayPlan, SetTodayPlan } = useContext(
    DataContext,
  ) as DataContextType;
  const [todayButton, setTodayButton] = useState(true);
  const handelButtonState = (value: boolean) => {
    setTodayButton(value);
  };
  const handelAddToTodayPlan = (data: IWorkout): void => {
    const isExist = todayPlan.some((f) => f.id === data.id);
    if (!isExist) {
      SetTodayPlan([...todayPlan, data]);
      handelButtonState(false);
    } else {
      const remaining = todayPlan.filter((f) => f.id !== data.id);
      SetTodayPlan(remaining);
      handelButtonState(true);
    }
  };
  return (
    <>
      <button
        onClick={() => handelAddToTodayPlan(data)}
        className="bg-[#C2F800] px-4 py-2 cursor-pointer rounded-[10px] border-transparent text-sm font-semibold"
      >
        <MdDateRange className="inline" />{" "}
        {todayButton ? "Add to today's plan" : "Added to today's plan"}
      </button>
    </>
  );
};

export default AddToTodayPlanButton;
