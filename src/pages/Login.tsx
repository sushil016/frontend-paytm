import Buttonui from "../components/Buttonui"
import Header from "../components/Header"
import Inputfile from "../components/Inputfile"
import Subheading from "../components/Subheading"


const Login = () => {
  return (
    <div className="w-full h-screen bg-slate-300 flex justify-center items-center">
      <div className="flex flex-col bg-zinc-100 h-[327px] w-[340px] rounded-lg items-center gap-2">
          <div><Header label={"SIGN IN"}/></div>
          <div className=""><Subheading label={"Enter your credientials to access your account"}/></div>
          
          <div className=""><Inputfile label={"Email"} placeholder={"xyz@gmail.com"}/></div>
          <div className=""><Inputfile label={"Password"} placeholder={""}/></div>
          <div>          <Buttonui label={"________Sign in________"}/>
          </div>
      </div>
    </div>
  )
}

export default Login
