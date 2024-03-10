import logo from "../assets/logo.svg";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center bg-[#ec755d] p-5 rounded-[15px] mb-4">
      <div className="flex flex-col  justify-center">
        <h3 className="text-[#ffdcd3]">My balance</h3>
        <p className="text-white text-[22px] font-bold">$921.48</p>
      </div>
      <div>
        <img src={logo} alt="logo" className="w-[55px]" />
      </div>
    </div>
  );
};

export default TopBar;
