import { useState } from "react";
import Header from "../components/Header";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(firstName);
  // console.log("hii");

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-slate-300 flex justify-center items-center">
      <div className="flex flex-col bg-zinc-100 h-[480px] w-[340px] rounded-lg items-center gap-2">
        <div>
          <Header label={"SIGNUP"} />
        </div>

        <div>
          <Subheading label={"Enter your credientials to create ACCOUNT"} />
        </div>
          <div className="mt-6">
          <input className="border-b-2 gap-3"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          type="text"
          placeholder="Firstname"
        ></input>

        <div>
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            placeholder={"Lastname"}
          > </input>
        </div>
        <div>
          <input type="text"  onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={"xyz@gmail.com"}/>
        </div>
        <div>
          <input type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          
          placeholder={""} />
          </div>
        </div>
        <div>
          {" "}
          <button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:4000/api/v1/user/signup",
                {
                  firstName,
                  lastName,
                  email,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/Dashboard");
            }}
          >
            signup
          </button>
        </div>
      </div>

      {/* <input onChange={e => {console.log(e.target.value);
     }} type="text" /> */}
    </div>
  );
};

export default Signup;
