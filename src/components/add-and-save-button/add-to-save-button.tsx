"use client";
import { DataContext } from "@/context/WorkoutDataProvider";
import { DataContextType, IWorkout } from "@/types/workoutDataType/workout";
import { useContext } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export interface AddButtonProps {
  data: IWorkout;
}

const AddToSaveButton = ({ data }: AddButtonProps) => {
  const { saved, setSaved } = useContext(DataContext) as DataContextType;
  const isExist = saved.some((f) => f.id === data.id);
  const handelSavedButton = (data: IWorkout): void => {
    const isExist = saved.some((f) => f.id === data.id);
    if (isExist) {
      const remaining = saved.filter((f) => f.id !== data.id);
      setSaved(remaining);
      toast.error(`${data.name} removed from saved items`, {
        className:
          "!bg-[#1F242D]  text-[14px] !text-[#E6E6E6] font-bold !border-2 !border-[#DC143C]",
        closeButton: false,
      });
    } else {
      setSaved([...saved, data]);
      toast.success(`${data.name} saved for later`, {
        className:
          "!bg-[#1F242D]  text-[14px] !text-[#E6E6E6] font-bold !border-2 !border-[#07BC0C]",
        closeButton: false,
      });
    }
  };
  return (
    <>
      <button
        onClick={() => {
          handelSavedButton(data);
        }}
        className="px-4 py-2 rounded-[10px] cursor-pointer  text-sm font-semibold text-white border border-gray-400"
      >
        {!isExist ? (
          <>
            <CiBookmark className="inline" /> Save for later
          </>
        ) : (
          <>
            <FaBookmark className="inline" /> Saved For later
          </>
        )}
      </button>
    </>
  );
};

export default AddToSaveButton;
