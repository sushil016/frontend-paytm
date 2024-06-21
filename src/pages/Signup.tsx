import { useState } from "react"
import Buttonui from "../components/Buttonui"
import Header from "../components/Header"
import Inputfile from "../components/Inputfile"
import Subheading from "../components/Subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Signup = () => {
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-slate-300 flex justify-center items-center">
      <div className="flex flex-col bg-zinc-100 h-[480px] w-[340px] rounded-lg items-center gap-2">
          <div><Header label={"SIGNUP"}/></div>
        
          <div className=""><Subheading label={"Enter your credientials to create ACCOUNTS"}/></div>
          <div className=""><Inputfile onChange={(e)=>{setFirstName(e.terget.value)}} label={"Firstname"} placeholder={"Firstname"}/></div>
          <div className=""><Inputfile  onChange={(e)=>{setLastName(e.terget.value)}} label={"Lastname"} placeholder={"Lastname"}/></div>
          <div className=""><Inputfile  onChange={(e)=>{setEmail(e.terget.value)}} label={"Email"} placeholder={"xyz@gmail.com"}/></div>
          <div className=""><Inputfile  onChange={(e)=>{setPassword(e.terget.value)}} label={"Password"} placeholder={""}/></div>
          <div>          <Buttonui onClick{ ...async () => {
            const response = await axios.get("https://localhost:3000/api/v2/user/signup",{
               // @ts ignore
              firstName,
              lastName,
              email,
              password
            });
            localStorage.setItem("token", response.data.token);
            navigate('/dashboard')

          }} label={"________Signup________"}/>
          </div>
      </div>
    </div>
  )
}

export default Signup
