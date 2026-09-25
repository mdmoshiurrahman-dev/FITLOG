"use client";
import { DataContext } from "@/context/WorkoutDataProvider";
import { DataContextType, IWorkout } from "@/types/workoutDataType/workout";
import { useContext, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";
export interface AddButtonProps {
  data: IWorkout;
}

const AddToSaveButton = ({ data }: AddButtonProps) => {
  const { saved, setSaved } = useContext(DataContext) as DataContextType;
  const handelSavedButton = (data: IWorkout): void => {
    const isExist = saved.some((f) => f.id === data.id);
    if (isExist) {
      const remaining = saved.filter((f) => f.id !== data.id);
      setSaved(remaining);
      handelButtonState();
      toast.success(`${data.name} removed from saved items`);
    } else {
      setSaved([...saved, data]);
      handelButtonState();
      toast.success(`${data.name} saved for later`);
    }
  };
  const [saveButton, setSaveButton] = useState(true);
  const handelButtonState = () => {
    setSaveButton(!saveButton);
  };
  return (
    <>
      <button
        onClick={() => {
          handelSavedButton(data);
        }}
        className="px-4 py-2 rounded-[10px] cursor-pointer  text-sm font-semibold text-white border border-gray-400"
      >
        {saveButton ? (
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
