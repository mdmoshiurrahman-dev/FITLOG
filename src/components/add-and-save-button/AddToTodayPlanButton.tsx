"use client";
import { MdDateRange } from "react-icons/md";
import { AddButtonProps } from "./add-to-save-button";
import { DataContext } from "@/context/WorkoutDataProvider";
import { DataContextType, IWorkout } from "@/types/workoutDataType/workout";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddToTodayPlanButton = ({ data }: AddButtonProps) => {
  const { todayPlan, SetTodayPlan } = useContext(
    DataContext,
  ) as DataContextType;
  const isExist = todayPlan.some((f) => f.id === data.id);
  const handelAddToTodayPlan = (data: IWorkout): void => {
    const isExist = todayPlan.some((f) => f.id === data.id);
    if (!isExist) {
      toast.success(`${data.name} added to today's plan`, {
        className:
          "!bg-[#1F242D]  text-[14px] !text-[#E6E6E6] font-bold !border-2 !border-[#07BC0C]",
        closeButton: false,
      });
      SetTodayPlan([...todayPlan, data]);
    } else {
      const remaining = todayPlan.filter((f) => f.id !== data.id);
      SetTodayPlan(remaining);
      toast.error(`${data.name} removed from today's plan`, {
        className:
          "!bg-[#1F242D]  text-[14px] !text-[#E6E6E6] font-bold !border-2 !border-[#DC143C]",
        closeButton: false,
      });
    }
  };
  return (
    <>
      <button
        onClick={() => handelAddToTodayPlan(data)}
        className="bg-[#C2F800] px-4 py-2 cursor-pointer rounded-[10px] border-transparent text-sm font-semibold"
      >
        <MdDateRange className="inline" />{" "}
        {!isExist ? "Add to today's plan" : "Added to today's plan"}
      </button>
    </>
  );
};

export default AddToTodayPlanButton;
