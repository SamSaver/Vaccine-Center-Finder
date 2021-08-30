function Header({...other}) {
  return (
    <div
      {...other}
      className="font-poppins flex justify-center 
      bg-gradient-to-r from-pink-600 via-yellow-100 to-blue-600 items-center 
        top-0 w-auto sticky h-24 py-4 px-6 border-b-[1px] shadow-md z-10"
    >
      <div className="flex items-center space-x-2 cursor-pointer">
        <h1 className=" text-gray-700 font-extrabold text-lg md:text-3xl">
          Vaccination Center Finder
        </h1>
      </div>
    </div>
  );
}

export default Header;
