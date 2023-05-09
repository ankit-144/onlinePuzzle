import { useState, useEffect } from "react";
import MatrixCard from "matrix-card";
import { Link } from "react-router-dom";

const MatrixPage = () => {
  const Typewriter = ({ text, secondaryText }) => {
    const [index, setIndex] = useState(0);
    const [secondaryIndex, setSecondaryIndex] = useState(0);
    useEffect(() => {
      localStorage.setItem("visited", true);
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 140);
      return () => clearInterval(interval);
    }, []);
    useEffect(() => {
      setTimeout(() => {
        const interval = setInterval(() => {
          setSecondaryIndex((prev) => prev + 1);
        }, 140);
        return () => clearInterval(interval);
      }, 3000);
    }, []);
    return (
      <div className="w-full flex flex-col justify-center max-w-[800px] ">
        {text && (
          <span className="mx-auto text-3xl font-bold px-3 py-3 ">
            {text?.slice(0, index)}
          </span>
        )}
        {secondaryText && (
          <span className="mx-auto text-3xl font-bold px-3 py-3 ">
            {secondaryText?.slice(0, secondaryIndex)}
          </span>
        )}
      </div>
    );
  };
  return (
    <>
      <MatrixCard
        id={"my-id-2"}
        matrixText={"ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"}
        delay={100}
        backgroundColor={"rgba(0, 40, 0, 0.1)"}
        textFontSize={"16"}
        textMainColor={"#00FF00"}
        textAlternateColorRatio={0.1}
        textAlternateColorList={["#00F000", "#00EA00", "#00E000", "#00D600"]}
        styleOverrideForCanvas={{ backgroundColor: "#00FF00" }}
        styleOverrideForContainerDiv={{ backgroundColor: "rgba(0, 40, 0)" }}
        styleOverrideForChildrenDiv={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-full flex flex-col justify-center items-center max-w-[400px] border-2 borderColor rounded-sm bg-[#254c2583] p-5">
          <Typewriter text="Welcome Hacker!!" />
          <Typewriter secondaryText="Join the Prestigious Hacker Scoiety. Give us what we need and be the part of the next big thing in this Cyber world" />
          <Link to="/" className="text-4xl ml-auto">
            Continue
          </Link>
        </div>
      </MatrixCard>
    </>
  );
};

export default MatrixPage;
