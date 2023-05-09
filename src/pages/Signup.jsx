import { Link, useNavigate } from "react-router-dom";
import { signupWithEmail } from "../configs/firebase.config";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const res = await signupWithEmail(email, password);
    if (res == "success") {
      navigate("/");
    }
  };

  return (
    <section className="w-full h-full flex flex-col gap-8 justify-center items-center px-8 py-8">
      <h1 className="text-5xl text-center">HACKER SOCIETY</h1>
      <div className="w-full max-w-[400px] border-2 borderColor rounded-sm bg-[#468e4626] p-5">
        <h2 className="text-5xl text-center">SIGN UP</h2>
        <div className="w-full flex flex-col gap-5 mt-5 justify-center items-center">
          <input
            className="w-4/5 max-w-[300px] bg-[transparent] border-2 border-[rgba(125, 225, 125, 0.75) rounded-md border-green-700] h-10 borderColor greenShadow placeholder:text-[rgba(125, 225, 125, 0.75)] px-3 outline-none text-xl"
            placeholder="Mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className=" w-4/5 max-w-[300px] bg-[transparent] border-2 border-[rgba(125, 225, 125, 0.75) rounded-md border-green-700] h-10 borderColor greenShadow placeholder:text-[rgba(125, 225, 125, 0.75)] px-3 outline-none text-xl"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="border-2 px-3 borderColor hover:text-white"
            onClick={handleSubmit}
          >
            Signup
          </button>
        </div>

        <p className="text-center mt-7">
          Already have an accout?{" "}
          <Link to="/login">
            <span className="underline hover:text-white">Login</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
