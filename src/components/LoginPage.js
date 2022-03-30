import skeleton from "../img/skeleton.png";
import toplogo from "../img/toplogo.svg";
import googlelogo from "../img/googlelogo.png";

const LoginPage = () => {
  return (
    <div className="flex flex-row">
      {/* <img src={skeleton} className="w-[69rem] h-[67.5rem] max-w-[69rem]" /> */}
      <img src={skeleton} className="h-full" />
      <div className="flex flex-col justify-center ml-[201px]">
        <img src={toplogo} className="w-[4.5rem] h-[4.5rem] mb-9" />
        <label className="font-bold text-4xl text-[#525252]">
          Login to your Account
        </label>
        <label className="text-[#5 25252] font-normal text-base">
          See what is going on with your business
        </label>
        <div className="border h-[3rem] w-full rounded-[5px] my-8 flex flex-row justify-center items-center border-[#E8E8E8]">
          <img className="w-[25px] h-[25px]" src={googlelogo} />
          <label className="mx-[13px] font-bold text-sm text-[#828282]">
            Continue with Google
          </label>
        </div>
        <div className="mt-1 mb-9 font-semibold text-[#DDDDDD]">
          <p className="text-center">
            ------------- or Sign in with Email -------------
          </p>
        </div>
        <label className="font-semibold text-sm text-[#828282]">Email</label>
        <div>
          <input
            className="border w-full h-[45px] rounded-[5px] border-[#DED2D9] p-[13px]"
            placeholder="mail@abc.com"
            type="email"
          ></input>
        </div>
        <label className="font-semibold text-sm text-[#828282] mt-6">
          Password
        </label>
        <div>
          <input
            className="border w-full h-[45px] rounded-[5px] border-[#DED2D9] p-[13px] mb-[8px]"
            type="password"
          ></input>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-start">
            <div className="form-check">
              <input
                className="form-check-input accent-[#7F265B] h-4 w-4 border border-gray-300 rounded-sm bg-white checked:white checked:bg-[#7F265B] checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label
                className="text-xs font-normal text-[#A1A1A1]"
                // for="flexCheckDefault"
              >
                Remember Me
              </label>
            </div>
          </div>
          <label className="text-[#7F265B] font-semibold text-xs mt-1">
            Forgot Password?
          </label>
        </div>
        <button className="mt-8 text-lg font-extrabold bg-[#7F265B] text-white w-[420px] h-[50px] rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
