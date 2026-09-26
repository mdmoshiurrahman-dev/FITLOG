const NotFound = () => {
  return (
    <div className="w-[90%] h-[35vh] mt-4 md:mt-6 lg:mt-8 bg-[#1F242D] border border-gray-700 rounded-2xl mx-auto flex flex-col justify-center items-center">
      <h2 className="text-xl text-red-600">404 | Not Found</h2>
      <p className="text-sm text-gray-500">You Should Recheck The URL</p>
    </div>
  );
};

export default NotFound;
