

import { useNavigate } from "react-router-dom";
import BottomWarning from "../components/BottomWarning";
import Buttonui from "../components/Buttonui";

const Homepage = () => {

  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8 ">
      <div className="text-6xl font-extrabold">
        Welcome to Wallet
      </div>
      <div className="bg-zinc-200 p-6 flex flex-col gap-4 rounded-md">
        <button onClick={()=> navigate('/signup')} >
          <Buttonui label={"Signup"} />
        </button>
        <BottomWarning label={"Already have an Account"} buttonText={"login"} to={'/login'}/>
      </div>
    </div>
  );
};

export default Homepage;
