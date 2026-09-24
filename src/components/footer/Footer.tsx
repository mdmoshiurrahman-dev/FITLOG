import Image from "next/image";

const Footer = () => {
  return (
    <footer className='border-gray-400 border-t md:mt-10 mt-6'>
      <div className="flex justify-between gap-3 py-6 lg:py-10  border-t container mx-auto">
        <div className="flex gap-3 justify-center items-center pl-4 md:pl-8">
          <Image src="/logo.png" height="30" width="30" alt="footer logo" />
          <p className="text-white font-teko text-[16px] lg:text-[20px]">FITLOG</p>
        </div>
        <div>
          <p className="text-gray-400 text-[12px] lg:text-[14px] pr-4 md:pr-8">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
