import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="flex justify-between py-6 lg:py-10 md:mt-10 mt-6 border-t border-gray-600">
        <div className="flex gap-3 justify-center items-center pl-4 md:pl-8">
          <Image src="/logo.png" height="30" width="30" alt="footer logo" />
          <p className="text-white font-teko text-[20px]">FITLOG</p>
        </div>
        <div>
          <p className="text-gray-400 text-[14px] pr-4 md:pr-8">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
