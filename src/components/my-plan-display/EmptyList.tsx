import Link from "next/link";

const EmptyList = () => {
  return (
    <div className="bg-[#101216] border border-gray-800 rounded-2xl flex justify-center items-center flex-col h-[40vh]">
      <h2 className="text-2xl text-white font-teko">NOTHING HERE YET</h2>
      <p className="text-[12px] text-gray-400">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href={"/"}>
        <button className="bg-[#C2F800] px-4 py-2 rounded-2xl text-[12px] font-semibold mt-6 cursor-pointer">
          Go to workouts
        </button>
      </Link>
    </div>
  );
};

export default EmptyList;
