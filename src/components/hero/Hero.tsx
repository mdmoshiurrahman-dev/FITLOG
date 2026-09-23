import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="p-5 grid lg:grid-cols-2 gap-4 lg:gap-10 bg-[#15171D] mx-4 my-4 lg:mx-10 lg:my-10 lg:py-8 rounded-2xl border border-gray-600">
        <div className="flex flex-col items-start justify-center">
          <p className="text-[#C2F800] font-semibold text-[14px] mb-5">WORKOUT LIBRARY</p>
          <h1 className="text-white text-7xl font-bold font-teko mb-3">TRAIN WITH INTENT. LOG EVERY SET.</h1>
          <p className="text-gray-400 text-5">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <button className="bg-[#C2F800] px-4 py-2 text-[14px] font-bold rounded-md my-5 cursor-pointer">BROWSE WORKOUTS</button>
        </div>
        <div className="flex justify-center items-center overflow-hidden">
          <Image src="/banner.png" height="650" width="350" alt="banner logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
