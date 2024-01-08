import Clock from "../clock/Clock";

const Navbar = () => {
  return (
    <div className="h-16 w-full lg:flex items-center px-5 bg-[#0F4C75] justify-between hidden">
      <h3 className=" text-2xl font-medium text-[#fff] ">Track Your Every Moments.</h3>
      <Clock/>
    </div>
  );
};

export default Navbar;
