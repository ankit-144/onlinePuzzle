import { Link } from "react-router-dom";
const Deadend = () => {
  return (
    <section className="w-full h-full flex flex-col gap-8 justify-center items-center px-8 py-8">
      <h1 className="text-5xl text-center">HACKER SOCIETY</h1>
      <div className="w-full max-w-[400px] border-2 borderColor rounded-sm bg-[#468e4626] p-5">
        <h2 className="text-5xl text-center">DEAD END x_x</h2>
        <br />
        <p className="text-center">
          Seems like you are lost Hacker! Think harder
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

export default Deadend;
