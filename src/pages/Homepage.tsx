

import Buttonui from "../components/Buttonui";

const Homepage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8 ">
      <div className="text-6xl font-extrabold">
        Welcome to Wallet
      </div>
      <div className="bg-zinc-200 p-6 flex flex-col gap-4 rounded-md">
        <button>
          <Buttonui label={"Signup"} />
        </button>
        <div className="flex gap-2 justify-center ">
          <span>Already have an Account</span>
          <button>
          <a href="">"Login"</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
