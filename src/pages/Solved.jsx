import { Link } from "react-router-dom";
import Hacker from "../icons8-hacker-64.png";

const Solved = () => {
  return (
    <section className="w-full h-full flex flex-col gap-8 justify-center items-center px-8 py-8">
      <h1 className="text-5xl text-center">HACKER SOCIETY</h1>
      <div className="w-full max-w-[400px] border-2 borderColor rounded-sm bg-[#468e4626] p-5">
        <div className="flex justify-between gap-2 items-center text-3xl">
          <img className="sm:w-16 w-12" src={Hacker} />
          <p>CONGRATULATIONS</p>
          <img className="sm:w-16 w-12" src={Hacker} />
        </div>
        <br />
        <p className="text-center">
          You did it! We found you atlast, Join us to rule the cyber world.
        </p>
        <p className="text-center mt-7">
          Go Back to{" "}
          <Link to="/">
            <span className="underline hover:text-white">Home</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Solved;
