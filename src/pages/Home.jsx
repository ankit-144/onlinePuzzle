import Navbar from "./conponents/Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const writerText = [
    `Hello hacker! Welcome to the hacker society get ready to join the world of amazing hackers, know more about the great minds those who ruled the hacker world in the abouts page,\nThere is an unknown hacker, We are trying to catch him for last 3 years yet are unable to find him. Can you help us to find his email? Show your worth and join us.\n\nEnter the email of the hacker`,
  ];

  const [answer, setAnswer] = useState();
  const [isWrong, setIsWrong] = useState(false);
  const [displayMsg, setDisplayMsg] = useState("");
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: writerText,
    loop: 0,
    delaySpeed: 10000000,
    typeSpeed: 60,
  });

  const wrongAnswer = () => {
    const msg = [
      "Wrong",
      "Try Again!",
      "Close but wrong",
      "Comeon Hacker don't give up",
      "Try Try Try",
    ];
    setIsWrong(true);
    const i = Math.floor(Math.random() * 5);
    setDisplayMsg(msg[i]);
    setTimeout(() => {
      setIsWrong(false);
    }, 2000);
  };

  const handleSubmit = () => {
    const correctAnswer = "Ankitabc224419cb2@gmail.com";
    if (answer == correctAnswer) {
      navigate("/solved");
    } else {
      wrongAnswer();
    }
  };

  return (
    <section className=" bg-[#0F0F0F] pb-3">
      <Navbar />
      <div className="mt-8 px-10">
        <div className="flex flex-col items-center my-auto">
          <h2 className="text-center text-5xl mb-4">The Hacker Society</h2>
          <p
            className="w-full max-w-[700px] min-h-[300px] h-fit"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {text}
          </p>
        </div>
        <div className="flex gap-5 justify-center mt-3 w-full max-w-[700px] mx-auto">
          <div className="flex-1 max-w-[300px]">
            <input
              className="w-full bg-[transparent] border-2 border-[rgba(125, 225, 125, 0.75) rounded-md border-green-700] h-10 borderColor greenShadow placeholder:text-[rgba(125, 225, 125, 0.75)] px-3 outline-none text-xl"
              placeholder="Mail"
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {isWrong && (
              <span className=" w-full max-w-[700px] mx-auto">
                {displayMsg}
              </span>
            )}
          </div>

          <button
            className="border-2 px-3 h-10 borderColor hover:text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
