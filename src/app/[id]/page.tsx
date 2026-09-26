import AddToSaveButton from "@/components/add-and-save-button/add-to-save-button";
import AddToTodayPlanButton from "@/components/add-and-save-button/AddToTodayPlanButton";
import { IWorkout } from "@/types/workoutDataType/workout";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = (await res.json()) as IWorkout[];
  return data.map((x) => ({ id: x.id.toString() }));
}

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = (await res.json()) as IWorkout;
  if(data.id === undefined){
    notFound()
  }
  return (
    <div className="flex flex-col lg:flex-row gap-5 container mx-auto mb-6 md:mb-8 p-6">
      <div className="overflow-hidden relative flex-1 min-h-62.5">
        <Image
          src={data.image}
          fill
          className="object-cover rounded-2xl"
          alt="workout image"
        />
      </div>
      <div>
        <div>
          <div>
            <h2 className="text-white font-teko text-4xl">{data.name}</h2>
            <p className="text-[14px] text-gray-300">{data.description}</p>
            <div className="flex gap-4 mt-1">
              {data.muscleGroups?.map((x, index) => (
                <p
                  className="bg-[#C2F800] px-3 rounded-xl font-bold py-0.5 my-2 text-[12px]"
                  key={index}
                >
                  {x}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#151922] rounded-2xl mt-5 p-5 border border-gray-700">
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <p className="text-gray-400 font-semibold text-sm">EQUIPMENT</p>
            <p className="text-white font-semibold text-sm">{data.equipment}</p>
          </div>
          <div className="flex justify-between border-b border-gray-700 py-2">
            <p className="text-gray-400 font-semibold text-sm">DIFFICULTY</p>
            <p className="text-white font-semibold text-sm">
              {data.difficulty}
            </p>
          </div>
          <div className="flex justify-between border-b border-gray-700 py-2">
            <p className="text-gray-400 font-semibold text-sm">SETS</p>
            <p className="text-white font-semibold text-sm">{data.sets}</p>
          </div>
          <div className="flex justify-between border-b border-gray-700 py-2">
            <p className="text-gray-400 font-semibold text-sm">REPS</p>
            <p className="text-white font-semibold text-sm">{data.reps}</p>
          </div>
          <div className="flex justify-between border-b border-gray-700 py-2">
            <p className="text-gray-400 font-semibold text-sm">DURATION</p>
            <p className="text-white font-semibold text-sm">
              {data.duration} min
            </p>
          </div>
          <div className="flex justify-between border-b border-gray-700 py-2">
            <p className="text-gray-400 font-semibold text-sm">CALORIES</p>
            <p className="text-white font-semibold text-sm">
              {data.caloriesBurned} Kcal
            </p>
          </div>
          <div className="flex justify-between  pt-2">
            <p className="text-gray-400 font-semibold text-sm">RATING</p>
            <p className="text-white font-semibold text-sm">{data.rating}</p>
          </div>
        </div>

        <div className="my-3">
          <h3 className="text-white text-xl font-bold">INSTRUCTIONS</h3>
          <ol className="list-decimal list-inside">
            {data.instructions?.map((i, index) => (
              <li className="text-gray-300 text-sm my-3" key={index}>
                {" "}
                {i}
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-5 flex gap-3 flex-col md:flex-row">
          <AddToTodayPlanButton data={data} />
          <AddToSaveButton data={data} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
