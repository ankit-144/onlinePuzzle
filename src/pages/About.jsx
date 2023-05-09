import { Link } from "react-router-dom";
import Navbar from "./conponents/Navbar";

const About = () => {
  return (
    <section className="h-fit bg-[#0F0F0F] pb-5">
      <Navbar />
      <div className="h-fit mt-8 px-10">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-5xl mb-4">ABOUT</h2>
          <div className="w-full max-w-[700px] h-56">
            We are a group of several like minded hackers, The society was
            established in 2002 and since then we are constantly hunting for the
            next big hacker who could help us in achieving our goal
            <br />
            We take immense pride to showcase some of our brightests members
            <br />
            <br />
            Connect with our bright minds
            <br />
            <ul className="w-full max-w-[700px] flex flex-col gap-5 mt-5">
              <li className="flex justify-center">
                <span className="flex-1 mx-auto text-center">Kwee</span>
                <span className="flex-1 text-center hover:text-white">
                  <Link to="/deadend">Connect+</Link>
                </span>
              </li>
              <li className="flex justify-center">
                <span className="flex-1 justify-center text-center">Sakil</span>
                <span className="flex-1 text-center hover:text-white">
                  <Link to="/deadend">Connect+</Link>
                </span>
              </li>
              <li className="flex justify-center text-center">
                <span className="flex-1 mx-auto ">Htripathi</span>
                <span className="flex-1 hover:text-white">
                  <a href="https://www.instagram.com/htripathi_02/">Connect+</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
