import { Dispatch, SetStateAction } from "react";

export interface IWorkout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export interface DataContextType {
  todayPlan: IWorkout[];
  SetTodayPlan: Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: Dispatch<React.SetStateAction<IWorkout[]>>;
  button: boolean;
  setButton: Dispatch<React.SetStateAction<boolean>>;
}

export interface SortedDataContextType {
  sortedTodayPlan: IWorkout[];
  setSortedTodayPlan: Dispatch<SetStateAction<IWorkout[]>>;
  sortedSavePlan: IWorkout[];
  setSortedSavePlan: Dispatch<SetStateAction<IWorkout[]>>;
}
